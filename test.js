(function () {
    const read = require("readfile");
    const fs_extr = require("fs-extra");
    const mustache = require("mustache");
    read("./test.mustache", function (err, template) {
        if (err) {
            console.err(err);
        } else {
            var data = fs_extr.readJsonSync("./data.json");
            var res = mustache.render(template.toString() , data);
            console.log(res);
        }
    });
})();
