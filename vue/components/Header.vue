<template>
  <header class="main-header">
      <div class="navbar navbar-expand-lg sticky-top navbar-dark bg-primary">
      <div class="container">
        <a href="#" class="navbar-brand">Django Web Programming</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="">과정 소개</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id="section-1" aria-expanded="false">HTML/CSS <span class="caret"></span></a>
              <div class="dropdown-menu" aria-labelledby="themes">
                <h6 class="dropdown-header">HTML</h6>  
                <a class="dropdown-item" href="">HTML기본</a>
                <a class="dropdown-item" href="">HTML심화</a>
                <div class="dropdown-divider"></div>
                <h6 class="dropdown-header">CSS</h6>  
                <a class="dropdown-item" href="">CSS기본</a>
                <a class="dropdown-item" href="">CSS심화</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id="section-2" aria-expanded="false">Django <span class="caret"></span></a>
              <div class="dropdown-menu" aria-labelledby="themes">
                <h6 class="dropdown-header">Model</h6>  
                <a class="dropdown-item" href="">HTML기본</a>
                <a class="dropdown-item" href="">HTML심화</a>
                <div class="dropdown-divider"></div>
                <h6 class="dropdown-header">Query</h6>  
                <a class="dropdown-item" href="">CSS기본</a>
                <a class="dropdown-item" href="">CSS심화</a>
              </div>
            </li>
          </ul>

          <ul class="nav navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Logout</a>
            </li>
          </ul>

        </div>
      </div>
    </div>
  </header>
</template>
