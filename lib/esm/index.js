var Visible = function (_a) {
    var when = _a.when, fallBack = _a.fallBack, children = _a.children;
    if (!!when) {
        return children || null;
    }
    else {
        return fallBack || null;
    }
};
export default Visible;
