import { useQuery } from "@tanstack/react-query";
import { getProperties } from "../../../services/property.services";

function ToWhere() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["where"],
    queryFn: () => getProperties(`wp-json/wp/v2/property_groups`),
  });

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }
  return (
    <div>
      <select className="px-2 py-0.5 outline-none" name="where" id="">
        {data?.map((place: any) => {
          return (
            <option value={place?.slug} key={place?.id}>
              {place.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default ToWhere;