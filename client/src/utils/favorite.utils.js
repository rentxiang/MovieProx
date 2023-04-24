const favoriteUtils = {
    check: ({ ListFavorites, mediaId }) => ListFavorites && ListFavorites.find( e=>
        e.mediaId.toString() === mediaId.toString()) !== undefined
};

export default favoriteUtils;