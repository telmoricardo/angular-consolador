const proxy = [
  {
    context: '/api',
    target: 'http://localhost/works/projetos-angular',
    pathRewrite: { '^/api': '' }
  }
];
module.exports = proxy;