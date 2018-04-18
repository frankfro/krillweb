cd dist
rem aws s3 sync . s3://www.frankfro.com --exclude "*" --include "assets/wav/*.mp3" --acl public-read
aws s3 sync . s3://www.frankfro.com --exclude "*" --include "*.js" --acl public-read
aws s3 sync . s3://www.frankfro.com --exclude "*" --include "*.html" --acl public-read

