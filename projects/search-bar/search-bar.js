const handleSearch = (e) => {
  e.preventDefault();
  const searchThroughEvent = e.target[0].value;
  const searchThroughDocument = document.getElementById("search-bar-input")
    .value;
  console.log("event: ", searchThroughEvent);
  console.log("document: ", searchThroughDocument);
  // use search to call APi with fetch() or to access some other database/list
};
