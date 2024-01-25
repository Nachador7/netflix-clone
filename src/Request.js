export const headers = {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTc1ZmNmNjg1MzU3N2VlNzBjZDJkMzczZWQyM2JmMCIsInN1YiI6IjY1YjJjMmJkY2VlNDgxMDE2MmE5ZWQ0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U-l5DH723KaywQj3-PskG01KF1dkNja3rjvp4eua4Wo',
  };
export const requests = {
    requestPopular: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?language=en-US&page=2`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?anguage=en-US&query=horror&page=1&include_adult=false`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,
  };
