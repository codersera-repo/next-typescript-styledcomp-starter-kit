import {useRouter} from "next/router";
import MyLayout from "../src/components/layouts/MyLayout";

const Post = () => {
    const router = useRouter();

    return (
        <MyLayout>
            <h1>{router.query.title}</h1>
            <p> This is a blog post content</p>
        </MyLayout>
    )
}

export default Post;
