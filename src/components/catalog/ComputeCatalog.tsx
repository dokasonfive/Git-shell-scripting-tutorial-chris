import React, { useEffect } from "react";
import ChrisAPIClient from "../../api/chrisapiclient";
import DisplayPage from "./DisplayPage";

const ComputeCatalog = () => {
  const [computeResources, setComputeResources] = React.useState<any[]>();
  const [loading, setLoading] = React.useState(false);
  const [pageState, setPageState] = React.useState({
    page: 1,
    perPage: 10,
    search: "",
    itemCount: 0,
  });

  const { page, perPage, search } = pageState;
  const [selectedCompute, setSelectedCompute] = React.useState<any>();

  const onSetPage = (_event: any, page: number) => {
    setPageState({
      ...pageState,
      page,
    });
  };
  const onPerPageSelect = (_event: any, perPage: number) => {
    setPageState({
      ...pageState,
      perPage,
    });
  };

  const handleFilterChange = (value: string) => {
    setPageState({
      ...pageState,
      search: value,
    });
  };
  useEffect(() => {
    async function fetchPipelines(
      perPage: number,
      page: number,
      search: string
    ) {
      setLoading(true);
      const offset = perPage * (page - 1);
      const client = ChrisAPIClient.getClient();
      const params = {
        limit: perPage,
        offset: offset,
        name: search,
      };
      const computeResourcesList = await client.getComputeResources(params);
      const computes = computeResourcesList.getItems();
      if (computes) {
        setComputeResources(computes);
        setPageState((pageState) => {
          return {
            ...pageState,
            itemCount: computeResourcesList.totalCount,
          };
        });
      }
      setLoading(false);
    }

    fetchPipelines(perPage, page, search);
  }, [perPage, page, search]);

  const handleSearch = (search: string) => {
    setPageState({
      ...pageState,
      search,
    });
  };
  return (
    <>
      <DisplayPage
        loading={loading}
        pageState={pageState}
        onSetPage={onSetPage}
        onPerPageSelect={onPerPageSelect}
        resources={computeResources}
        handleFilterChange={handleFilterChange}
        selectedResource={selectedCompute}
        setSelectedResource={(compute: any) => {
          setSelectedCompute(compute);
        }}
        title="Compute"
        handleComputeSearch={handleSearch}
        search={pageState.search}
      />
    </>
  );
};

export default ComputeCatalog;
