import { fetchWork } from "../../config/fetchData";
import PortfolioPage from "../../components/portfolio/page";

function Media({ work }) {
  return (
    <div>
      <PortfolioPage category={'Media'} work={work} />
    </div>
  )
}

export async function getStaticProps() { 
  const workRes = await fetchWork({ type: 'work', category: 'Media' });
  const work = await workRes.map((p) => {
    return p.fields
  });
  return {
    props: {
      work,
    },
  };

}

export default Media;