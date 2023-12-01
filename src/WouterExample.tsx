import { useSearchParams } from "./useSearchParams";

import { gql, useQuery } from "urql";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const WouterExample = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const tab = searchParams.get("tab");

  const [{ data }] = useQuery({
    query: gql`
      query ($first: Int!) {
        allFilms(first: $first) {
          films {
            id
          }
        }
      }
    `,
    variables: {
      first: Number(tab ?? 1), // Commenting out this line somehow "fixes" the issue.
    },
  });

  return (
    <div>
      <h1 className="text-4xl">Wouter</h1>
      <details>
        <summary>Search Params</summary>
        <code>{JSON.stringify(Object.fromEntries(searchParams))}</code>
      </details>
      <details>
        <summary>API Response</summary>
        <code>{JSON.stringify(data)}</code>
      </details>
      <Tabs
        value={tab as string}
        onValueChange={(value) => setSearchParams({ tab: value })}
        className="w-[400px]"
      >
        <TabsList>
          <TabsTrigger value="1">Tab 1</TabsTrigger>
          <TabsTrigger value="2">Tab 2</TabsTrigger>
          <TabsTrigger value="3">Tab 3</TabsTrigger>
          <TabsTrigger value="4">Tab 4</TabsTrigger>
          <TabsTrigger value="5">Tab 5</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default WouterExample;
