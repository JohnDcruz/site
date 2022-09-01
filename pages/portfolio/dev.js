import { fetchWork } from "../../config/fetchData";
import PortfolioPage from "../../components/portfolio/page";

function Dev({ work }) {
  return (
    <PortfolioPage category={'Development'} work={work} />
  )
}

export async function getStaticProps() { 
  const workRes = await fetchWork({ type: 'work', category: 'Development' });
  const work = await workRes.map((p) => {
    return p.fields
  });
  const id = await workRes.map((p) => {
    return p.sys.id
  });
  return {
    props: {
      work,
    },
  };

}

export default Dev;