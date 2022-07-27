

// make types for search input

import { SearchBar } from "@cred/neopop-web/lib/components";

const SearchBarCom = () => {
    const handleChange = (value: any) => {
        console.log('Search query: ', value);
    };
    const handleSubmit = () => {
        console.log('Search query submitted');
    };
//    keyboard short for handleFocus


    return (
        <SearchBar
            colorConfig={{
                activeBorder: "#0d0d0d",
                backgroundColor: "#ffffff",
                border: "#E0E0E0",
                closeIcon: "#E0E0E0",
            }}      
            handleSearchInput={function noRefCheck() { }}
            inputColorConfig={{
                caretColor: "#144CC7",
                errorColor: "#EE4D37",
                labelColor: "rgba(13,13,13, 0.5)",
                placeholderColor: "rgba(13,13,13, 0.3)",
                textColor: "rgba(13,13,13, 0.9)",
            }}
            onSubmit={function noRefCheck() { }}
            placeholder="search query here"
        />  
    )
}

export default SearchBarCom 