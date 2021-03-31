import React from 'react'
import './Blog.css'
import img1 from './quem-somos-saudebemestar.jpg'
import img2 from './qualidade-de-vida.jpg'
import img3 from './vida-saudavel.jpg'

function Blog(){

  return(
    <>
     <div className="main-banner sbe">
          <div className="container px-md-0">
              <h1 ><span>Blog de saúde</span></h1>
          </div>
      </div>

      <div className="container px-md-0 main-container">
        <div className="row">
          <div className="col-md-9 col-xs-12">

            <div className="news-post-list">
              <div className="blog-span">
                <article className="news-post">
                  <img src={img1} width="812" height="490" alt="turismo de saúde e bem estar" className="img-responsive img-center-sm img-center-xs w-100 imgcls"/>
                  <div className="inner">
                      <h4>
                          <a href="/pt/blog-saude/turismo-de-saude/">Turismo de saúde | Saudebemestar.pt</a>
                      </h4>
                      <p>O<strong>&nbsp;turismo de saúde</strong>&nbsp;não é uma atividade recente. Sempre foram frequentes, um pouco por todo o mundo, as deslocações em busca tanto de atividades de promoção ...</p>
                      <a href="/pt/blog-saude/turismo-de-saude/" className="btn btn-secondary">
                          Ler mais
                          <i className="fa fa-arrow-circle-right"></i>
                      </a>
                  </div>
                </article>
              </div>
            </div>
            <div className="news-post-list">
              <div className="blog-span">
                <article className="news-post">
                  <img src={img2} width="812" height="490" alt="Qualidade de vida" className="img-responsive img-center-sm img-center-xs w-100 imgcls"/>
                  <div className="inner">
                      <h4>
                          <a href="/pt/blog-saude/qualidade-de-vida/">Qualidade de vida - o que é, conceito, saúde, bem estar</a>
                      </h4>
                      <p><span>Qualidade de vida: saiba o que que é, conheça o conceito e a definição pela oms, a relação com a saúde e bem estar, o meio ambiente e a terceira idade. A qualidade de vida no trabalho, os programas para trabalhadores e nas empresas, etc.</span></p>
                      <a href="/pt/blog-saude/qualidade-de-vida/" className="btn btn-secondary">
                          Ler mais
                          <i className="fa fa-arrow-circle-right"></i>
                      </a>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-3">
            <div className="sidebar-block">
              <h3 className="side-heading1 top">Mais lidos</h3>
              <ul className="list-unstyled list-style-r topic">
                  <li>
                      <a href="/pt/blog-saude/vida-saudavel/"><img src={img3} alt="/pt/blog-saude/vida-saudavel/" width="54" height="54"/>Vida saudável</a>
                  </li>
                  <li>
                      <a href="/pt/blog-saude/promocao-da-saude/"><img src={img2} alt="/pt/blog-saude/promocao-da-saude/" width="54" height="54"/>Promoção de Saúde</a>
                  </li>
                  <li>
                      <a href="/pt/blog-saude/beleza-e-saude/"><img src={img1} alt="/pt/blog-saude/beleza-e-saude/" width="54" height="54"/>Beleza e saúde</a>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default Blog;
