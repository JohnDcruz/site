import { fetchWork } from "../../config/fetchData";
import PortfolioPage from "../../components/portfolio/page";

function Dev({ work }) {
  return (
    <div>
      <PortfolioPage category={'Development'} work={work} />
    </div>
  )
}

export async function getStaticProps() { 
  const workRes = await fetchWork({ type: 'work', category: 'Development' });
  const work = await workRes.map((p) => {
    return p.fields
  });
  return {
    props: {
      work,
    },
  };

}

export default Dev;