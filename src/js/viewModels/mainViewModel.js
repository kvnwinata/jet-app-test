define(['ojs/ojcore', 'knockout', 'jquery', 'viewModels/postViewModel', 'services/postServices'],
    function (oj, ko, $, PostViewModel, PostServices) {

        function MainViewModel() {
            var self = this;
            self.title = ko.observable('');
            self.text = ko.observable('');
            self.posts = ko.observableArray([]);

            self.refresh = function() {
                PostServices.getAllPosts(self.posts);                         
            }

            self.deleteAllPosts = function() {
                PostServices.deleteAllPosts();
                setTimeout(function() {
                    self.refresh();                    
                }, 100);// should be using promise instead
            }

            self.createPost = function() {
                var newPost = new PostViewModel();
                newPost.title(self.title());
                newPost.text(self.text());
                self.title('');
                self.text('');
                PostServices.createPost(newPost);
                setTimeout(function() {
                    self.refresh();                    
                }, 100);// should be using promise instead
            }

            self.generatePosts = function() {
                PostServices.generateSampleData();                
                setTimeout(function() {
                    self.refresh();                    
                }, 100);// should be using promise instead
            }
            
            self.editPost = function(post) {
                PostServices.updatePost(post);
                setTimeout(function() {
                    self.refresh();                    
                }, 100);// should be using promise instead
            }

            self.deletePost = function(post) {
                PostServices.deletePost(post);
                self.posts.remove(post);
            }

            self.refresh();
        }


        return new MainViewModel(); // singleton
    }
);
