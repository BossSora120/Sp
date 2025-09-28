<template>
  <footer id="footer-3" class="pt-100 footer ft-3-ntr">
    <div class="container">
      <!-- FOOTER CONTENT -->
      <div class="row">
        <!-- FOOTER LOGO -->
        <div class="col-xl-3">
          <div class="footer-info">
            <img class="footer-logo" src="/assets/images/logo-footer.png" alt="โลโก้" />
          </div>
        </div>

        <!-- FOOTER LINKS -->
        <div class="col-sm-4 col-lg-3 col-xl-2">
          <div class="footer-links fl-1">
            <h6 class="s-17 w-700">ลิงก์</h6>
            <ul class="foo-links clearfix">
              <li><p><NuxtLink to="/th/about">เกี่ยวกับเรา</NuxtLink></p></li>
              <li><p><NuxtLink to="/th/features">คุณสมบัติ</NuxtLink></p></li>
              <li><p><NuxtLink to="/th/pricing-1">ราคา</NuxtLink></p></li>
              <li><p><NuxtLink to="/th/contacts">ติดต่อ</NuxtLink></p></li>
              <li><p><NuxtLink to="/th/blog-listing">บล็อค</NuxtLink></p></li>
            </ul>
          </div>
        </div>

        <!-- PRODUCT -->
        <div class="col-sm-4 col-lg-2">
          <div class="footer-links fl-2">
            <h6 class="s-17 w-700">กฎหมาย</h6>
            <ul class="foo-links clearfix">
              <li><p><NuxtLink to="/th/terms">เงื่อนไขการใช้งาน</NuxtLink></p></li>
              <li><p><NuxtLink to="/th/privacy">นโยบายความเป็นส่วนตัว</NuxtLink></p></li>
              <li><p><NuxtLink to="/th/cookies">นโยบายคุกกี้</NuxtLink></p></li>
              <li><p><NuxtLink to="/th/sitemap">แผนผังเว็บไซต์</NuxtLink></p></li>
            </ul>
          </div>
        </div>

        <!-- LEGAL -->
        <div class="col-sm-4 col-lg-3 col-xl-2">
          <div class="footer-links fl-3">
            <h6 class="s-17 w-700">โซเชียล</h6>
            <ul class="foo-links clearfix">
              <li><p><NuxtLink to="/th/terms">Facebook</NuxtLink></p></li>
              <li><p><NuxtLink to="/th/privacy">LinkedIn</NuxtLink></p></li>
              <li><p><NuxtLink to="/th/cookies">YouTube</NuxtLink></p></li>
              
            </ul>
          </div>
        </div>

        <!-- NEWSLETTER -->
        <div class="col-sm-10 col-md-8 col-lg-4 col-xl-3">
          <div class="footer-form">
            <h6 class="s-17 w-700">ติดตามข่าวสาร</h6>
            <form class="newsletter-form">
              <div class="input-group r-06">
                <input type="email" class="form-control" placeholder="อีเมลของคุณ" required id="s-email" />
                <span class="input-group-btn ico-15">
                  <button type="submit" class="btn color--theme">
                    <span class="flaticon-right-arrow-1"></span>
                  </button>
                </span>
              </div>
              <label for="s-email" class="form-notification"></label>
            </form>
          </div>
        </div>
      </div>

      <hr />

      <!-- BOTTOM FOOTER -->
      <div class="bottom-footer">
        <div class="row row-cols-1 row-cols-md-2 d-flex align-items-center">
          <div class="col">
            <div class="footer-copyright">
              <p class="p-sm">&copy; 2025 EduConnext. <span>สงวนลิขสิทธิ์ทั้งหมด</span></p>
            </div>
          </div>
          <div class="col">
            <ul class="bottom-footer-socials ico-20 text-end">
              <li><a href="#"><span class="flaticon-facebook"></span></a></li>
              <li><a href="#"><span class="flaticon-twitter"></span></a></li>
              <li><a href="#"><span class="flaticon-instagram"></span></a></li>
              <li><a href="#"><span class="flaticon-youtube"></span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <FooterGoToTop />
  </footer>
</template>
