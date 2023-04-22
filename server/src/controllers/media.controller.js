import responseHandler from "../handlers/response.handler";
import tmdbApi from "../tmdb/tmdb.api"
import userModel from "../models/user.model";
import favoriteModel from "../models/favorite.model"
import reviewModel from "../models/review.model";
import tokenMiddlerware from "../middlewares/token.middlewares";

const getList = async (req, res) => {
    try {
        const { page } = req.query;
        const { mediaType, mediaCategory } = req.params;

        const response = await tmdbApi.mediaList({ mediaType, mediaCategory, page});

        return responseHandler.ok(res, response);
    } catch  {
        responseHandler.error(res);
    }
};

const getGenres = async (req, res) => {
    try {
        const { mediaType } = req.params;
        const response = await tmdbApi.mediaGenres({ mediaType});

        return responseHandler.ok(res, response);
    } catch  {
        responseHandler.error(res);
        
    }
};

const search = async (req, res) => {
    try {
        const { mediaType } = req.params;
        const { query, page } = req.query;

        const response = await tmdbApi.mediaSearch({ 
            query,
            page,
            mediaType : mediaType === "people" ? "person" : mediaType
        });

        return responseHandler.ok(res, response);
    } catch  {
        responseHandler.error(res);
        
    }
};

const getDetial = async (req, res) => {
    try {
        const { mediaType, mediaId } = req.params;

        const media = await tmdbApi.mediaSearch({ mediaType, mediaId });

        media.credits = await tmdbApi.mediaCredits({ mediaType, mediaId });

        const videos = await tmdbApi.mediaVideos({ mediaType, mediaId });

        media.videos =  videos;

        const recommend = await tmdbApi.mediaRecommend({ mediaType, mediaId });

        media.recommend = recommend.results;
        
        media.images = await tmdbApi.mediaImages({ mediaType, mediaId });

        const tokenDecoded = tokenMiddlerware.tokenDecode(req);
        
        if ( tokenDecoded) {
            const user = await userModel.findById(tokenDecoded.data);

            if (user) {
                const isFavorite = await favoriteModel.findOne({ user: user.id, mediaId });
                media.isFavorite = isFavorite !== null;
            }
        }

        media.reviews = await reviewModel.find({ mediaId}).populate("user").sort("-createdAt");

        responseHandler.ok(res, media);
    } catch  {
        responseHandler.error(res);
        
    }
};

export default { getList, getGenres, search, getDetial }; 