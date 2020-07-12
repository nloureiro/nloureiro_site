## Local Development



echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> /Users/nuno/.bash_profile
source ~/.bash_profile

gem install bundler jekyll
bundle install



Clone this repository and run:

```bash
bundle install
bundle exec jekyll server --watch
bundle exec jekyll server --watch --livereload
```
Jekyll will watch your project folder for changes.

Now navigate to [localhost:4000](http://localhost:4000/) to preview the site, and
[localhost:4000/admin](http://localhost:4000/admin) to log into the CMS.
