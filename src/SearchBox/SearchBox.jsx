import css from "./SearchBox.module.css";
import { FcSearch } from "react-icons/fc";

const SearchBox = ({ value }) => {
  return (
    <div className={css.searchWrapper}>
      <p className={css.searchText}>Search by name</p>
      <input
        className={css.input}
        type="text"
        value={value}
      />
      <span className={css.icon}>
        <FcSearch />
      </span>
    </div>
  );
};

export default SearchBox;
