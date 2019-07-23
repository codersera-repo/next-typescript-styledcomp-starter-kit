import MyLayout from "../src/components/layouts/MyLayout";
import Link from "next/link";
import fetch from 'isomorphic-unfetch';

const Index = (props) => (
    <MyLayout>
        <h1>Batman TV Shows</h1>
        <ul>
            {props.shows ? props.shows.map(show => (
                <li key={show.id}>
                    <Link href="/p/[id]" as={`/p/${show.id}`} key={show.id}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            )): "No"}
        </ul>
    </MyLayout>
);

Index.getInitialProps = async function () {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
    console.log(`Show data fetched. Count: ${data.length}`);
    return {
        shows: data.map(entry => entry.show)
    };
}


export default Index;
