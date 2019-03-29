'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">NGNews</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-c0999d462a480eed96f85a530de8e531"' : 'data-target="#xs-components-links-module-AppModule-c0999d462a480eed96f85a530de8e531"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-c0999d462a480eed96f85a530de8e531"' :
                                            'id="xs-components-links-module-AppModule-c0999d462a480eed96f85a530de8e531"' }>
                                            <li class="link">
                                                <a href="components/AnConnexionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AnConnexionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AnewsAuteurComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AnewsAuteurComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AnewsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AnewsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AnewsDetailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AnewsDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AnewsRelativeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AnewsRelativeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AnewsreserveesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AnewsreserveesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Erreur404Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Erreur404Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-c0999d462a480eed96f85a530de8e531"' : 'data-target="#xs-injectables-links-module-AppModule-c0999d462a480eed96f85a530de8e531"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-c0999d462a480eed96f85a530de8e531"' :
                                        'id="xs-injectables-links-module-AppModule-c0999d462a480eed96f85a530de8e531"' }>
                                        <li class="link">
                                            <a href="injectables/AnewsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AnewsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EditionModule.html" data-type="entity-link">EditionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EditionModule-42035fb4ee4e0b8a7382980ae124cef1"' : 'data-target="#xs-components-links-module-EditionModule-42035fb4ee4e0b8a7382980ae124cef1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EditionModule-42035fb4ee4e0b8a7382980ae124cef1"' :
                                            'id="xs-components-links-module-EditionModule-42035fb4ee4e0b8a7382980ae124cef1"' }>
                                            <li class="link">
                                                <a href="components/AnAuteursComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AnAuteursComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AnEditionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AnEditionComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-EditionModule-42035fb4ee4e0b8a7382980ae124cef1"' : 'data-target="#xs-pipes-links-module-EditionModule-42035fb4ee4e0b8a7382980ae124cef1"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-EditionModule-42035fb4ee4e0b8a7382980ae124cef1"' :
                                            'id="xs-pipes-links-module-EditionModule-42035fb4ee4e0b8a7382980ae124cef1"' }>
                                            <li class="link">
                                                <a href="pipes/FiltrerPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FiltrerPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/NewsPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NewsPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EditionRoutingModule.html" data-type="entity-link">EditionRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AnewsService.html" data-type="entity-link">AnewsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConnexionService.html" data-type="entity-link">ConnexionService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AuthIntercepteur.html" data-type="entity-link">AuthIntercepteur</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/BaseHrefIntercepteur.html" data-type="entity-link">BaseHrefIntercepteur</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/SecuriteIntercepteur.html" data-type="entity-link">SecuriteIntercepteur</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/BlocEditionGuard.html" data-type="entity-link">BlocEditionGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AuteursModel.html" data-type="entity-link">AuteursModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NouvellesModel.html" data-type="entity-link">NouvellesModel</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});