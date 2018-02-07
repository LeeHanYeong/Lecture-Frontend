<template>
  <div class="login-container">
    <div class="container">
        <div class="form-container col-lg-4 col-md-6 mr-auto ml-auto col-sm-8">
            <h3 class="form-title text-center">Login to continue</h3>
            <form action="" class="login-form">
                <div class="form-group">
                    <input type="text" name="username" autofocus="" maxlength="254" class="form-control" placeholder="Username" required="">
                </div>
                <div class="form-group">
                    <input type="password" name="password" class="form-control" placeholder="Password" required="">
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-rounded btn-primary btn-block">Sign In</button>
                </div>
            </form>
            <hr>
            <div>
                <a href="#" class="btn btn-info btn-block btn-signup">Sign Up</a>
            </div>
        </div>  
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/custom';

.login-container {
    display: flex;
    // background: $bg-gray;

    justify-content: center;
    align-items: center;

    .form-title {
        margin-bottom: 20px;
    }
    .form-group {
        margin-bottom: .75rem;
    }
    .btn {
        text-transform: uppercase;
    }
}
</style>
