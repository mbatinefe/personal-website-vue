<script setup>

</script>

<template>
    <header>
        <!-- Navbar -->
        <div class="fixed-top">
            <nav class="navbar fixed-top navbar-expand-sm navbar-light" 
                    style=" 
                            margin-right: 10px;
                            background-color: #F8F9FA;
                            position: sticky;">
                        <img
                            src="../assets/mbefe-logo.png"
                            class="d-inline-block align-top"
                            alt="logo-mbefe"
                            style="width: 50px; 
                                height: auto;
                                margin-left: 10px;"
                        />
                <button 
                    type="button" 
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    class="navbar-toggler"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item" :class="darker-list-item">
                            <a href="/" class="nav-link">
                                Home
                            </a>
                        </li>
                        <li class="nav-item" :class="darker-list-item">
                            <a href="/projects" class="nav-link">
                                Projects
                            </a>
                        </li>

                        <li class="nav-item" :class="darker-list-item">
                            <a href="/social" class="nav-link">
                                Social Media
                            </a>
                        </li>

                        <li class="nav-item" :class="darker-list-item" >
                            <a href="/resume" class="nav-link">
                                Resume
                            </a>
                        </li>

                        <li id="vol-box" class="nav-item" :class="darker-list-item">
                            <a href="/contact" class="nav-link">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <RouterView />
    </header>
</template>

<style scoped>

.nav-item{
    margin-left:auto;
    margin-right: auto;
}

.btn-outline-success {
  border-color: green;
  
}

.btn-outline-primary{
    border-color: blue;
}

#vol-box{
    padding-left: 30px;
}

/* When navbar is collapsed, remove option "Contact" padding */
@media (max-width: 576px) {
  #vol-box {
    padding-left: 0;
  }
}

</style>