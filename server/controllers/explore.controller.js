import axios from "axios";

export const explorePopularRepos = async (req, res) => {
  const { language } = req.params;

  try {
    const response = await axios.get(
      `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc`,
      {
        headers: {
          authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
      }
    );
    res.json(response.data.items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
