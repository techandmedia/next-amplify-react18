/_ eslint-disable @next/next/no-img-element _/
import React from "react";
import { Collection, Card, Heading, Text } from "@aws-amplify/ui-react";
import { Candidate } from "../API";

export default function PrivatePost({ data }) {
return (
<Card style={{ marginTop: 20 }}>
<Collection type="list" items={data} gap="1.5rem">
{(item: Candidate, index) => (
<Card key={index} padding="1rem" variation="outlined">
<Heading level={6}>Private Candidate Post</Heading>
<Text>Tenant : {item.tenant}</Text>
<Text>My Score: {item.score}</Text>
<Text>Tanggal Masuk: {item.tanggal_masuk}</Text>
</Card>
)}
</Collection>
</Card>
);
}
