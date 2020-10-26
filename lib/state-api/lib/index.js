class StateApi {
  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors),
    };
  }
  mapIntoObject(arr) {
    console.info("DataApi: mapIntoObject()");

    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }
  lookupAuthor(authorId) {
    return this.data.authors[authorId];
  }
  getState() {
    return this.data;
  }
}
module.exports = StateApi;
// export default StateApi;
