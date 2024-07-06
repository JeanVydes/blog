import { Bold, Citate, Code, EmptyLine, Image, Italic, Link, List, ListItem, Paragraph, Subtitle, Underline } from "../(components)/components";
import { Article } from "./article"

const MyArticle: Article = {
    match_params: ["test"],
    title: "Test Article",
    author: "Test Author",
    date: new Date("2021-01-01"),
    tags: ["test"],
    preview: "Test Article",
    content: <>
        <Subtitle>This is a subtitle</Subtitle>
        <Paragraph>This is a paragraph <Bold>and this is bold</Bold> <Italic>And this is italic</Italic> <Underline>And this is underline</Underline> <Link display="Google.com" href="https://google.com" /></Paragraph>
        <EmptyLine /><EmptyLine /><EmptyLine />
        <List>
            <ListItem>This is a list item</ListItem>
            <ListItem>This is a list item</ListItem>
            <ListItem>This is a list item</ListItem>
        </List>
        <Citate>"This is a citate"</Citate>
        <Code>console.log("This is a code block")</Code>
        <EmptyLine />
        <Image src="https://via.placeholder.com/150" alt="Placeholder" />
    </>,
    banner: "https://via.placeholder.com/150"
}

export default MyArticle;