// import { Component } from 'react';
import { ChangeEventHandler } from 'react';
import './search-box.styles.css';

type SearchBoxProps = {
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  className: string;
};

const SearchBox = ({
  onChangeHandler,
  placeholder,
  className,
}: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

/* class SearchBox extends Component {
  render() {
    const { onChangeHandler, placeholder, className } = this.props;

    return (
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    );
  }
}
 */
export default SearchBox;
