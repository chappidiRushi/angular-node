cors
to build production
ng build --configuration=production
{
   "/api": {
     "target": "http://localhost:3000",
     "secure": false,
     "pathRewrite": {
      "^/api": ""
    },
    "changeOrigin": true
   }
 }