// next is called when the middleware has completed, basically after
// the first middleware has completed it'll pass it's result to the next middleware/routing
module.exports = (req, res, next) => {
    if (!req.user) {
        // 401, unauthorized
        return res.status(401).send( { error: 'You must be logged in!' } );
    }

    next();
};
