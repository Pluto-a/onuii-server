const commonController = {};

commonController.response = async (res, cb) => {
    let result;
    try{
        result = await cb();
    } catch (e) {
        result = {result: 'error', message: e.toString()};
    }
    res.send(result);
};

export default commonController;
