define(['ojs/ojcore', 'knockout', 'jquery'],
    function (oj, ko, $) {
        function PostViewModel() {
            var self = this;

            self.id = null;
            self.text = ko.observable("");
            self.title = ko.observable("");
            self.timestamp = ko.observable(null);

            self.toJSON = function () {
                var json = {};
                if (self.id) {
                    json.id = self.id;
                }
                if (self.text()) {
                    json.text = self.text();
                }
                if (self.title()) {
                    json.title = self.title();
                }
                if (self.timestamp()) {
                    json.timestamp = self.timestamp();
                }
                return json;
            };

            self.fromJSON = function (object) {
                self.id = object.id;
                self.text(object.text);
                self.timestamp(object.timestamp);
                self.title(object.title)
            };
        }

        return PostViewModel; // constructor
    }
);
