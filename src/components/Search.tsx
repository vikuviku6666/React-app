import React, { useState } from "react";

interface Props {
  sendSearchQuery?(): void;
}

export const Search: React.FC<Props> = ({
  sendSearchQuery = () => undefined,
}) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const onSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  const search = () => {
    sendSearchQuery();
  };

  return (
    <div>
      <input
        value={searchValue}
        onChange={onSearchInput}
        name="search"
        type="text"
      />
      <button onClick={search}>search</button>
      <div className="div">{searchValue || "Enter the text"}</div>
    </div>
  );
};
