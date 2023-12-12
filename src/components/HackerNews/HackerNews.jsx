import { useSelector, useDispatch } from 'react-redux';
import { requestArticles } from '../../reducers/hackerNewsReducer.js'
import { useEffect } from 'react';
import Card from '../shared/Card/Card.jsx';
import Loading from '../shared/Loading/Loading.jsx';





// HackerNews function//
function HackerNews() {
  const articles = useSelector((state) => state.hackerNews.articles);       // Utilize 'useSelector to get 'articles' state from redux store
  const loading = useSelector((state) => state.hackerNews.loading);         // Utilize 'useSelector to get 'loading' state from redux store
  const dispatch = useDispatch();                                           // Invoke the 'useDispatch' to get the 'dispatch' function

  useEffect(() => {                                                         // Adding a 'useEffect' hook
    dispatch(requestArticles);                                              // ????
  }, [])                                                                    // Add empty array as a second argument to the useEffect


  const articleCards = articles.map((article) => <Card key={article.id} article={article} />);
  return (
    <div className="news-container">
      <img className='logo' src="../../assets/hackerNews.jpeg" alt="" />
      {loading ? <Loading /> : <div>{articleCards}</div>}
    </div>
  );
}

export default HackerNews






