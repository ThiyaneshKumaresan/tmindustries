<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, user-scalable=yes"
    />
    <title>TM Industries | Orthopaedic Precision</title>
    <!-- Font Awesome -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    />
    <!-- Google Fonts -->
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700;14..32,800&display=swap"
      rel="stylesheet"
    />
    <!-- Swiper CSS -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
    />
    <!-- AOS -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: "Inter", sans-serif;
        background: #f5fbfd;
        color: #1a2e2f;
        overflow-x: hidden;
      }

      :root {
        --tm-primary: #025a64;
        --tm-primary-dark: #01434b;
        --tm-primary-light: #0e7c89;
        --tm-mint: #b2dfdb;
        --tm-glass: rgba(2, 90, 100, 0.08);
      }

      /* ---------- SPLASH SCREEN (ORTHO-THEMED ANIMATION) ---------- */
      .splash-screen {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(145deg, #025a64 0%, #013c44 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 1.2s ease;
        opacity: 1;
      }
      .splash-container {
        text-align: center;
        animation: gentleFloat 2s infinite alternate;
      }
      @keyframes gentleFloat {
        0% {
          transform: translateY(0px);
        }
        100% {
          transform: translateY(-15px);
        }
      }
      .splash-logo {
        font-size: 4rem;
        font-weight: 800;
        background: linear-gradient(135deg, #fff, #b2dfdb);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        letter-spacing: -1px;
      }
      .mission-text {
        color: #e0f2f1;
        font-size: 1.1rem;
        letter-spacing: 3px;
        margin: 20px 0 30px;
        font-weight: 400;
      }
      .ortho-loader {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-top: 40px;
      }
      .ortho-loader span {
        width: 14px;
        height: 50px;
        background: #b2dfdb;
        border-radius: 20px;
        animation: bonePulse 1s infinite ease-in-out;
      }
      .ortho-loader span:nth-child(2) {
        animation-delay: -0.8s;
        background: #fff;
      }
      .ortho-loader span:nth-child(3) {
        animation-delay: -0.4s;
      }
      @keyframes bonePulse {
        0%,
        100% {
          transform: scaleY(0.6);
        }
        50% {
          transform: scaleY(1.4);
          background: #ffffff;
        }
      }
      .loader-img {
        width: 120px;
        height: auto;
        display: block;
        border-radius: 8px;
      }
      .loader-icon {
        width: 140px;
        height: auto;
        margin: 0 auto 20px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      /* Main site initial hide */
      .main-site {
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.8s ease;
      }

      /* Floating Center Tabs */
      .floating-tabs {
        position: sticky;
        top: 20px;
        z-index: 1000;
        display: flex;
        justify-content: center;
        gap: 25px;
        margin: 20px auto 0;
        width: 100%;
      }
      .floating-btn {
        background: rgba(255, 255, 255, 0.96);
        backdrop-filter: blur(8px);
        padding: 14px 38px;
        border-radius: 60px;
        font-weight: 700;
        font-size: 1rem;
        color: #025a64;
        border: 1.5px solid #025a64;
        cursor: pointer;
        transition: 0.25s;
        box-shadow: 0 8px 20px rgba(2, 90, 100, 0.12);
        font-family: "Inter", sans-serif;
      }
      .floating-btn.active,
      .floating-btn:hover {
        background: #025a64;
        color: white;
        transform: translateY(-3px);
      }

      .container {
        max-width: 1300px;
        margin: 0 auto;
        padding: 0 30px;
      }

      /* Hero Carousel - infinite loop */
      .hero-carousel {
        margin: 40px 0 50px;
        border-radius: 48px;
        overflow: hidden;
        box-shadow: 0 30px 40px -15px rgba(2, 90, 100, 0.3);
        width: 100%;
        max-width: 100%;
      }
      .swiper-slide {
        background: linear-gradient(125deg, #025a64, #017c8a);
        padding: 80px 20px;
        text-align: center;
        color: white;
        width: 100%;
        box-sizing: border-box;
      }
      .swiper-slide h2 {
        font-size: 2.8rem;
        font-weight: 700;
        word-wrap: break-word;
        overflow-wrap: break-word;
      }
      .swiper-slide p {
        font-size: 1.2rem;
        margin-top: 15px;
        opacity: 0.9;
        word-wrap: break-word;
        overflow-wrap: break-word;
      }
      .swiper {
        width: 100%;
        max-width: 100%;
        overflow: hidden;
      }
      .swiper-wrapper {
        width: 100%;
      }

      /* Trusted section */
      .trusted-section {
        background: #effaf8;
        border-radius: 40px;
        padding: 35px 30px;
        margin: 40px 0;
        text-align: center;
        border-left: 8px solid #025a64;
      }
      .trusted-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 25px;
        margin-top: 25px;
      }
      .trust-badge {
        background: white;
        border-radius: 100px;
        padding: 12px 32px;
        font-weight: 600;
        color: #025a64;
        box-shadow: 0 5px 12px rgba(0, 0, 0, 0.05);
      }

      /* TM Special highlight */
      .special-highlights {
        background: white;
        border-radius: 40px;
        padding: 20px;
        margin: 40px 0;
        box-shadow: 0 15px 30px rgba(2, 90, 100, 0.08);
        border: 1px solid #cde3e0;
      }

      .special-highlights .special-title {
        display: flex;
        align-items: center;
        gap: 12px;
        color: var(--tm-primary);
        border-left: 6px solid var(--tm-primary);
        padding-left: 18px;
        margin: 0 0 18px 0;
        line-height: 1.1;
        font-weight: 700;
      }

      .special-highlights .special-title img {
        width: 50px;
        height: auto;
        display: block;
      }

      .specials-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
        margin: 25px 0;
      }
      .spec-item {
        background: #eef7f5;
        padding: 12px 28px;
        border-radius: 60px;
        font-weight: 600;
        color: #025a64;
      }

      /* Infinite scroll gallery (continuous) */
      .infinite-scroll-container {
        overflow: hidden;
        white-space: nowrap;
        margin: 50px 0;
        position: relative;
        width: 100%;
      }
      .scroll-track {
        display: inline-flex;
        gap: 35px;
        animation: scrollInfinite 25s linear infinite;
      }
      .scroll-card {
        background: white;
        padding: 25px 40px;
        border-radius: 60px;
        display: inline-flex;
        align-items: center;
        gap: 12px;
        font-weight: 600;
        color: #025a64;
        box-shadow: 0 8px 18px rgba(0, 0, 0, 0.05);
        border: 1px solid #b2dfdb;
      }
      @keyframes scrollInfinite {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }

      /* Products section tabs */
      .product-tabs {
        display: flex;
        justify-content: center;
        gap: 30px;
        margin: 30px 0 40px;
      }
      .tab-btn {
        background: white;
        border: 2px solid #025a64;
        padding: 12px 32px;
        border-radius: 60px;
        font-weight: 700;
        font-size: 1.1rem;
        cursor: pointer;
        transition: 0.2s;
        color: #025a64;
      }
      .tab-btn.active,
      .tab-btn:hover {
        background: #025a64;
        color: white;
      }
      .products-grid{
        display:grid;
        grid-template-columns:repeat(auto-fill,minmax(280px,1fr));
        gap:30px;
        align-items:stretch;
        margin-bottom:60px;
      }
      .product-search {
        display: flex;
        justify-content: center;
        margin-bottom: 25px;
      }
      .product-search input {
        width: 100%;
        max-width: 560px;
        padding: 14px 18px;
        border-radius: 999px;
        border: 1px solid #cbdcdb;
        font-family: inherit;
        font-size: 1rem;
        outline: none;
        box-shadow: 0 10px 20px rgba(2, 90, 100, 0.08);
        transition:
          border-color 0.25s ease,
          box-shadow 0.25s ease;
      }
      .product-search input:focus {
        border-color: #025a64;
        box-shadow: 0 12px 24px rgba(2, 90, 100, 0.16);
      }
      .page-icon {
        position: fixed;
        top: 16px;
        left: 16px;
        width: 58px;
        height: 58px;
        border-radius: 18px;
        background: rgba(255, 255, 255, 0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 14px 30px rgba(0, 0, 0, 0.18);
        border: 1px solid rgba(2, 90, 100, 0.18);
        z-index: 9999;
        transition:
          opacity 0.35s ease,
          transform 0.35s ease;
      }
      .page-icon.page-icon-hidden {
        opacity: 0;
        transform: translateY(-10px);
        pointer-events: none;
      }
      .page-icon img {
        width: 40px;
        height: auto;
        display: block;
        max-width: 100%;
      }
      img {
        max-width: 100%;
        height: auto;
      }
      .no-results {
        grid-column: 1 / -1;
        padding: 30px;
        background: #f0f8f7;
        border-radius: 28px;
        text-align: center;
        color: #01434b;
        font-weight: 700;
      }
      .product-card{
        background:white;
        border-radius:32px;
        overflow:hidden;
        transition:0.3s;
        display:flex;
        flex-direction:column;
        height:100%;
        box-shadow:0 12px 24px rgba(0,0,0,0.05);
        cursor:pointer;
        border:1px solid #e0efed;
        min-height:0;
      }
      .product-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 25px 30px -12px #025a6440;
      }
      .prod-code {
        width: 100%;
        background: linear-gradient(135deg, #e8f4f1, #f0f8f7);
        padding: 14px 16px;
        text-align: center;
        border-bottom: 1px solid rgba(2, 90, 100, 0.1);
      }
      .prod-code p {
        margin: 0;
        font-weight: 600;
        color: #025a64;
        font-size: 0.95rem;
        letter-spacing: 0.5px;
      }
      .prod-img{
        height:320px;
        display:flex;
        align-items:center;
        justify-content:center;
        background:#f0f8f7;
        padding:20px;
        width:100%;
      }
      .prod-img img{
        max-width:100%;
        max-height:240px;
        object-fit:contain;
        display:block;
      }
      .prod-info{
        padding:20px;
        display:flex;
        flex-direction:column;
        flex:1 1 auto;
        min-height:0;
      }
      .prod-info h3{
        font-size:1.3rem;
        
        min-height:80px;
        display:flex;
        align-items:flex-start;
      }
      .prod-desc{
        
        flex:1 1 auto;
        margin-bottom:12px;
      }
      .enq-pbtn{
        background:#025a64;
        border:none;
        color:white;
        padding:10px;
        width:100%;
        border-radius:40px;
        font-weight:600;
        margin-top:auto;
        cursor:pointer;
      }

      /* Contact Page Form */
      .contact-page {
        background: white;
        border-radius: 48px;
        padding: 40px;
        margin: 40px 0;
        box-shadow: 0 20px 35px rgba(2, 90, 100, 0.1);
      }

      .contact-page h2 {
        margin-top: -10px;
        margin-bottom: 30px;
        font-size: 1.8rem;
        font-weight: 700;
      }

      .contact-page h2 i {
        margin-right: 12px;
      }

      .form-group {
        margin-bottom: 25px;
      }
      .form-group input,
      .form-group textarea {
        width: 100%;
        padding: 15px;
        border-radius: 28px;
        border: 1px solid #cbdcdb;
        font-family: inherit;
      }
      .submit-btn {
        background: #025a64;
        color: white;
        padding: 14px 30px;
        border: none;
        border-radius: 60px;
        font-weight: bold;
        cursor: pointer;
        transition: 0.3s;
      }
      .submit-btn:hover {
        background: #01434b;
        transform: translateY(-2px);
      }
      .submit-btn:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }
      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      .fa-spin {
        animation: spin 1s linear infinite;
      }
      .address-block {
        margin-top: 30px;
        background: #eef3f2;
        padding: 25px;
        border-radius: 32px;
      }
      .address-block .contact-row {
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
        margin-top: 10px;
      }
      .address-block .contact-row i {
        width: 24px;
        text-align: center;
        color: #025a64;
      }

      footer {
        background: #025a64;
        color: #e0f0ee;
        padding: 35px 0;
        text-align: center;
        margin-top: 60px;
      }
      .footer-link {
        color: #b2dfdb;
        text-decoration: none;
        font-weight: 600;
      }
      .footer-link:hover {
        text-decoration: underline;
      }

      /* Modal */
      .modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(1, 45, 50, 0.9);
        backdrop-filter: blur(8px);
        z-index: 2000;
        justify-content: center;
        align-items: center;
      }
      .modal-card {
        background: white;
        max-width: 500px;
        width: 90%;
        border-radius: 48px;
        padding: 35px;
        position: relative;
      }
      .close-modal {
        position: absolute;
        right: 25px;
        top: 20px;
        font-size: 28px;
        cursor: pointer;
      }
      .modal-actions {
        display: flex;
        gap: 15px;
        margin: 25px 0;
      }
      [data-aos] {
        transition-timing-function: cubic-bezier(0.2, 0.9, 0.4, 1.2);
      }
      /* Mobile and Tablet Responsive Styles */
      @media (max-width: 1024px) {
        .container {
          padding: 0 20px;
        }
        .floating-tabs {
          gap: 15px;
          margin: 15px auto 0;
        }
        .floating-btn {
          padding: 12px 20px;
          font-size: 0.9rem;
        }
      }

      @media (max-width: 768px) {
        /* Tablet Fixes */
        body {
          overflow-x: hidden;
        }
        .container {
          padding: 0 15px;
          max-width: 100%;
        }
        .floating-tabs {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          padding: 15px;
          max-width: 500px;
          margin: 15px auto;
          width: calc(100% - 30px);
        }
        .floating-btn {
          padding: 14px 12px;
          font-size: 0.85rem;
          min-height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          white-space: normal;
          word-wrap: break-word;
          border-radius: 40px;
        }
        .floating-btn i {
          display: block;
          margin-bottom: 4px;
          font-size: 1.1rem;
        }
        
        /* Hero Carousel Mobile */
        .hero-carousel {
          margin: 30px 0 40px;
          border-radius: 32px;
        }
        .swiper-slide {
          padding: 60px 15px;
        }
        .swiper-slide h2 {
          font-size: 1.8rem;
        }
        .swiper-slide p {
          font-size: 1rem;
        }

        /* Product Grid */
        .products-grid{
          grid-template-columns: repeat(auto-fill, minmax(200px,1fr));
          gap:20px;
          align-items:stretch;
        }

        /* Form Styles */
        .contact-page {
          padding: 25px;
          border-radius: 32px;
        }
        .form-group input,
        .form-group textarea {
          padding: 12px;
          font-size: 16px;
        }
        .submit-btn {
          padding: 12px 20px;
          font-size: 0.95rem;
        }

        /* Address Block */
        .address-block {
          padding: 20px;
          border-radius: 24px;
        }

        /* Trusted Section */
        .trusted-grid {
          gap: 15px;
        }
        .trust-badge {
          padding: 10px 20px;
          font-size: 0.85rem;
        }

        /* Product Card */
        .product-card{
          border-radius:24px;
          height:80%;
          display:flex;
          flex-direction:column;
          min-height:0;
        }
        .prod-img{height:200px;display:flex;align-items:center;justify-content:center;padding:0 20px;background:#f0f8f7}
        .prod-img img{max-width:180px;max-height:180px;object-fit:contain}
        .prod-info{padding:5px;display:flex;flex-direction:column;flex:1 1 auto;min-height:0}
        .prod-info h3{font-size:1.1rem;min-height:60px;display:flex;align-items:flex-start}
        .prod-desc{flex:1 1 auto;min-height:0;}

        /* Infinite Scroll */
        .scroll-card {
          padding: 20px 25px;
          gap: 8px;
          font-size: 0.85rem;
        }

        /* Special Highlights */
        .special-highlights {
          padding: 15px;
        }
        .special-title {
          font-size: 1.1rem;
        }
        .special-title img {
          width: 40px;
        }
      }

      @media (max-width: 480px) {
        /* Mobile Fixes - 320px to 480px */
        body {
          overflow-x: hidden;
        }
        * {
          max-width: 100vw;
        }
        .container {
          padding: 0 12px;
          max-width: 100vw;
        }

        .floating-tabs {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          padding: 12px;
          max-width: 100%;
          margin: 12px auto;
          position: sticky;
          top: 10px;
          z-index: 1000;
        }
        .floating-btn {
          padding: 12px 8px;
          font-size: 0.75rem;
          min-height: 55px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          border-radius: 30px;
          border: 1.2px solid #025a64;
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 4px 12px rgba(2, 90, 100, 0.1);
        }
        .floating-btn i {
          font-size: 1rem;
          margin-bottom: 3px;
          display: block;
        }
        .floating-btn.active,
        .floating-btn:hover {
          background: #025a64;
          color: white;
          transform: scale(1.02);
        }

        /* Page Icon Hide on Mobile */
        .page-icon {
          display: none !important;
        }

        /* Hero Section */
        .hero-carousel {
          margin: 20px 0 30px;
          border-radius: 24px;
          box-shadow: 0 15px 25px rgba(2, 90, 100, 0.2);
        }
        .swiper-slide {
          padding: 50px 12px;
        }
        .swiper-slide h2 {
          font-size: 1.4rem;
          font-weight: 700;
          line-height: 1.2;
        }
        .swiper-slide p {
          font-size: 0.85rem;
          margin-top: 10px;
        }
        .swiper-slide i {
          font-size: 2.2rem;
          margin-bottom: 12px;
        }

        /* Trusted Section */
        .trusted-section {
          border-radius: 28px;
          padding: 20px 12px;
          margin: 25px 0;
        }
        .trusted-section h2 {
          font-size: 1.1rem;
        }
        .trusted-grid {
          gap: 10px;
          margin-top: 15px;
        }
        .trust-badge {
          padding: 8px 16px;
          font-size: 0.75rem;
          border-radius: 50px;
        }

        /* Special Highlights */
        .special-highlights {
          padding: 12px;
          margin: 25px 0;
          border-radius: 24px;
        }
        .special-title {
          font-size: 0.95rem;
          padding-left: 12px;
          margin-bottom: 12px;
        }
        .special-title img {
          width: 35px;
          height: 35px;
        }
        .specials-grid {
          gap: 10px;
          margin: 15px 0;
        }
        .spec-item {
          padding: 8px 16px;
          font-size: 0.75rem;
          border-radius: 50px;
        }

        /* Products Grid */
        .product-tabs {
          gap: 10px;
          margin: 20px 0 30px;
          flex-wrap: wrap;
        }
        .tab-btn {
          padding: 10px 16px;
          font-size: 0.8rem;
          border-radius: 50px;
        }
        .products-grid{
          grid-template-columns: repeat(auto-fill, minmax(160px,1fr));
          gap:12px;
          margin-bottom:40px;
          align-items:stretch;
        }
        .product-search input {
          max-width: 100%;
          padding: 12px 14px;
          font-size: 14px;
        }

        /* Product Card */
        .product-card{
          border-radius:20px;
          box-shadow:0 8px 16px rgba(0,0,0,0.08);
          display:flex;
          flex-direction:column;
          height:100%;
          min-height:0;
        }
        .prod-code {
          padding: 10px 12px;
        }
        .prod-code p {
          font-size: 0.7rem;
        }
        .prod-img{height:200px;display:flex;align-items:center;justify-content:center;padding:0 12px;background:#f0f8f7}
        .prod-img img{max-width:120px;max-height:120px;object-fit:contain}
        .prod-info{padding:12px;display:flex;flex-direction:column;flex:1 1 auto;min-height:0}
        .prod-info h3{font-size:0.95rem;min-height:48px;display:flex;align-items:flex-start}
        .prod-desc{font-size:0.75rem;line-height:1.3;flex:1 1 auto;}
        .enq-pbtn{padding:10px;font-size:0.75rem;border-radius:30px;margin-top:auto}

        /* No Results */
        .no-results {
          padding: 20px;
          border-radius: 20px;
          font-size: 0.9rem;
        }

        /* Contact Page */
        .contact-page {
          padding: 20px;
          border-radius: 28px;
          margin: 25px 0;
        }
        .contact-page h2 {
          font-size: 1.2rem;
          margin-bottom: 20px;
        }
        .form-group {
          margin-bottom: 15px;
        }
        .form-group input,
        .form-group textarea {
          padding: 12px;
          border-radius: 20px;
          font-size: 14px;
          border: 1px solid #cbdcdb;
        }
        .submit-btn {
          padding: 12px 20px;
          border-radius: 50px;
          font-size: 0.85rem;
          width: 100%;
        }

        /* Address Block */
        .address-block {
          margin-top: 20px;
          padding: 15px;
          border-radius: 20px;
        }
        .address-block h3 {
          font-size: 1rem;
          margin-bottom: 10px;
        }
        .address-block p {
          font-size: 0.8rem;
          line-height: 1.4;
          margin-top: 8px !important;
        }

        /* About Us */
        #aboutUs {
          width: 100%;
          overflow-x: hidden;
        }
        #aboutUs .container {
          width: 100%;
          padding: 0 12px;
        }
        #aboutUs h2 {
          font-size: 1.2rem;
          margin-bottom: 20px;
        }

        /* Modal */
        .modal-card {
          width: 90%;
          max-width: 100%;
          border-radius: 32px;
          padding: 25px;
        }
        .modal-card h3 {
          font-size: 1.1rem;
        }
        .modal-actions {
          gap: 20px;
          flex-wrap: wrap;
        }

        /* Infinite Scroll */
        .infinite-scroll-container {
          margin: 30px 0;
          overflow: hidden;
        }
        .scroll-track {
          gap: 15px;
        }
        .scroll-card {
          padding: 12px 18px;
          font-size: 0.75rem;
          border-radius: 50px;
          gap: 6px;
        }

        /* Footer */
        footer {
          padding: 25px 0;
          font-size: 0.75rem;
        }

        /* Prevent horizontal scrolling */
        html, body {
          width: 100%;
          overflow-x: hidden;
        }
        .floating-tabs,
        .container,
        .modal-card {
          max-width: 100%;
          width: 100%;
          box-sizing: border-box;
        }
      }

      @media (max-width: 375px) {
        /* Extra small mobile devices */
        .floating-btn {
          padding: 10px 6px;
          font-size: 0.7rem;
          min-height: 52px;
        }
        .floating-btn i {
          font-size: 0.9rem;
        }
        .swiper-slide h2 {
          font-size: 1.2rem;
        }
        .submit-btn {
          font-size: 0.8rem;
          padding: 10px;
        }
      }

      @media (max-width: 320px) {
        /* Smallest mobile devices */
        .floating-tabs {
          gap: 8px;
          padding: 10px;
        }
        .floating-btn {
          padding: 8px 4px;
          font-size: 0.65rem;
          min-height: 50px;
          border-radius: 25px;
        }
        .floating-btn i {
          font-size: 0.85rem;
          margin-bottom: 2px;
        }
        .container {
          padding: 0 10px;
        }
        .swiper-slide {
          padding: 40px 10px;
        }
        .swiper-slide h2 {
          font-size: 1.1rem;
        }
        .swiper-slide p {
          font-size: 0.75rem;
        }
        .prod-info h3 {
          font-size: 0.85rem;
        }
      }
    </style>
  </head>
  <body>
    <div class="splash-screen" id="splashScreen">
      <div class="splash-container">
        <div class="loader-icon">
          <img
            src="tm logo.png"
            class="loader-img"
            alt="TM logo"
          />
        </div>
        <div class="splash-logo">TM INDUSTRIES</div>
        <div class="mission-text">Assurance of Precision</div>
        <div class="ortho-loader"><span></span><span></span><span></span></div>
      </div>
    </div>

    <div class="main-site" id="mainSite">
      <div class="page-icon" title="TM Industries">
        <img src="tm logo.png" alt="TM logo" />
      </div>
      <!-- Floating Tabs Center -->
      <div class="floating-tabs">
        <button class="floating-btn active" data-nav="home">
          <i class="fas fa-home"></i> HOME
        </button>
        <button class="floating-btn" data-nav="products">
          <i class="fas fa-box-open"></i> OUR PRODUCTS
        </button>
        <button class="floating-btn" data-nav="about">
          <i class="fas fa-info-circle"></i> ABOUT US
        </button>
        <button class="floating-btn" data-nav="contact">
          <i class="fas fa-phone-alt fa-flip-horizontal"></i> CONTACT
        </button>
      </div>

      <div class="container" id="homeContainer">
        <!-- Infinite Carousel (continuous loop) -->
        <div class="hero-carousel swiper mySwiper" data-aos="fade-up">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div>
                <i
                  class="fas fa-bone"
                  style="font-size: 3rem; margin-bottom: 20px"
                ></i>
                <h2>Advanced External Fixators</h2>
                <p>Trusted by 300+ hospitals for trauma care</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div>
                <i
                  class="fas fa-child"
                  style="font-size: 3rem; margin-bottom: 20px"
                ></i>
                <h2>Pediatric & Veterinary Excellence</h2>
                <p>Specialized solutions for all age groups</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div>
                <i
                  class="fas fa-globe"
                  style="font-size: 3rem; margin-bottom: 20px"
                ></i>
                <h2>Korea Export Quality</h2>
                <p>ISO 13485 · Global Standards</p>
              </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>

        <!-- Trusted by Major Healthcare (not leaders) -->
        <div class="trusted-section" data-aos="fade-right">
          <h2 style="color: #025a64">
            <i class="fas fa-handshake"></i> Trusted by Major Healthcare
          </h2>
          <div class="trusted-grid">
            <span class="trust-badge"
              ><i class="fas fa-hospital-user"></i> PSG Hospitals</span
            >
            <span class="trust-badge"
              ><i class="fas fa-hospital-alt"></i> Govt Thoothukudi</span
            >
            <span class="trust-badge"
              ><i class="fas fa-clinic-medical"></i> Thirunelveli Medical</span
            >
            <span class="trust-badge"
              ><i class="fas fa-heartbeat"></i> Delhi Apollo Groups</span
            >
          </div>
        </div>

        <!-- TM Industries Special Highlights -->
        <div class="special-highlights" data-aos="fade-up">
          <h2 class="special-title">
            <img
              src="INDUSTRIES (5).png"
              height="50"
              width="50"
              class="img tm"
              alt="TM Industries logo"
            />
            TM Industries' OrthoEdge
          </h2>
          <div class="specials-grid">
            <span class="spec-item"
              ><i class="fas fa-bone"></i> Adults Ortho Solutions</span
            >
            <span class="spec-item"
              ><i class="fas fa-child"></i> Pediatric Implants</span
            >
            <span class="spec-item"
              ><i class="fas fa-paw"></i> Vet Products (Special)</span
            >
            <span class="spec-item"
              ><i class="fas fa-microchip"></i> Customization Ready</span
            >
          </div>
          <div
            style="
              background: #effaf8;
              border-radius: 28px;
              padding: 25px;
              margin-top: 15px;
            "
          >
            
            <h3 style="margin: 10px 0">Why TM Industries?</h3>
            <p>
              The Enterprises is equiped with skilled labours and machines. We are Known for our customised instruments and instrument Set.

            </br>Team is ready to deliver your Product. with in the time. The Experienced hands in our company will give you the Product more than your Expectation.</p></br><p>We follow the Principles</p></br><p style="text-align: center;font-family: georgia;"><b>"PRECISE&emsp;POTENTIAL&emsp;PERFECT"</b></p>


            </p>
          </div>
        </div>

        <!-- Infinite Scroll auto forever (no scrollbar visible) -->
        <div class="infinite-scroll-container">
          <div class="scroll-track">
            <div class="scroll-card">
              <i class="fas fa-microscope"></i> Bio Testing
            </div>
            <div class="scroll-card">
              <i class="fas fa-dna"></i> Biocompatible
            </div>
            <div class="scroll-card">
              <i class="fas fa-cogs"></i> Precision CNC
            </div>
            <div class="scroll-card">
              <i class="fas fa-truck-fast"></i> 4-Day Logistics
            </div>
            <div class="scroll-card">
              <i class="fas fa-chart-line"></i> Korea Export
            </div>
            <div class="scroll-card">
              <i class="fas fa-stethoscope"></i> Surgeon Approved
            </div>
            <!-- Duplicate for seamless loop -->
            <div class="scroll-card">
              <i class="fas fa-microscope"></i> Bio Testing
            </div>
            <div class="scroll-card">
              <i class="fas fa-dna"></i> Biocompatible
            </div>
            <div class="scroll-card">
              <i class="fas fa-cogs"></i> Precision CNC
            </div>
            <div class="scroll-card">
              <i class="fas fa-truck-fast"></i> 4-Day Logistics
            </div>
            <div class="scroll-card">
              <i class="fas fa-chart-line"></i> Korea Export
            </div>
            <div class="scroll-card">
              <i class="fas fa-stethoscope"></i> Surgeon Approved
            </div>
          </div>
        </div>
      </div>

      <!-- Products Container with tabs -->
      <div id="productsContainer" style="display: none">
        <div class="container">
          <div class="product-tabs">
            <button class="tab-btn active" data-cat="pediatric">
              <i class="fas fa-baby"></i> Pediatric Products
            </button>
            <button class="tab-btn" data-cat="adult">
              <i class="fas fa-person"></i> Adult Products
            </button>
          </div>
          <div
            class="product-search"
            id="adultSearchWrapper"
            style="display: none"
          >
            <input
              type="search"
              id="adultSearch"
              placeholder="Search adult products..."
            />
          </div>
          <div id="pediatricGrid" class="products-grid"></div>
          <div id="adultGrid" class="products-grid" style="display: none"></div>
        </div>
      </div>

      <!-- About Us Container -->
      <div id="aboutUs" style="display: none">
        <div class="container">
          <h2 style="color: #025a64; margin-bottom: 30px; font-size: 1.8rem; font-weight: 700;">
            <i class="fas fa-info-circle"></i> About Us
          </h2>
          <div style="
    background: white;
    border-radius: 32px;
    padding: 40px;
    box-shadow: 0 10px 25px rgba(2, 90, 100, 0.08);
    line-height: 1.8;
    position: relative;
    overflow: hidden;
">
    <div style="
        position: absolute;
        inset: 0;
        background: url('INDUSTRIES (5).png') center center no-repeat;
        background-size: 350px;
        opacity: 0.08;
        pointer-events: none;
    "></div>

    <div style="position: relative; z-index: 1;">
        <h2>COMPANY PROFILE :</h2>
        <li style="margin-top: 15px;">The TM Industries has been established in the year ' has gained a enormous response among the orthopaedic surgeons due it's excellent performance in External Fixator, LRS paediatric fixation system manufacturing sector. Our company based on Coimbatore, Tamilnadu.</li>
            <li style="margin-top: 15px;">Our Products are popular among Orthopaedic surgeons due to our precision and dynamic function.</li>
            <li style="margin-top: 15px;">All our products are developed with an acknowledged supervision únder medical Norms with a massive manufacturing unit</li>
            <li style="margin-top: 15px;">We are delivering our products to withstand required potential with proper stability. Our team is also working to develop more new products which will satisfy engineering stability and medical norms. We have gained an inspiring position in this field due to our Customers Support. Mr.T.KALIMUTHU's guidance to company helped to attain this position his vast industrial experience, knowledge in medical science have enabled to crave a impressive growth.</li>
    </div>
</div>
          
        </div>
      </div>

      <!-- Contact Page Container -->
      <div id="contactContainer" style="display: none">
        <div class="container contact-page" data-aos="fade-up">
          <h2 style="color: #025a64">
            <i class="fas fa-envelope"></i> Get in Touch
          </h2>
          <form id="enquiryForm">
            <div class="form-group">
              <input type="text" id="name" name="name" placeholder="Full Name" required />
            </div>
            <div class="form-group">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                required
              />
            </div>
            <!-- NEW: WhatsApp Number Field -->
            <div class="form-group">
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                placeholder="WhatsApp Number (optional)"
              />
            </div>
            <div class="form-group">
              <input type="email" id="email" name="email" placeholder="Email ID" required />
            </div>
            <div class="form-group">
              <textarea
                rows="4"
                id="message"
                name="message"
                placeholder="Your Enquiry / Product Requirement"
                required
              ></textarea>
            </div>
            <button type="submit" class="submit-btn">
              <i class="fas fa-paper-plane"></i> Send Enquiry
            </button>
          </form>
          <div class="address-block">
            <h3><i class="fas fa-map-marker-alt"></i> Corporate Office</h3>
            <p style="margin-top: 10px;">
              RMT Backside, 2/568C, Pollachi Main road, Malumichampatti,
              Coimbatore, Tamilnadu - 641050.
            </p>
            <!-- Updated contact rows with icons -->
            <div class="contact-row">
              <i class="fab fa-whatsapp" style="color: #25d366;"></i>
              <span>+91 94439 13628</span>
            </div>
            <div class="contact-row">
              <i class="fas fa-phone-alt fa-flip-horizontal" style="color: #025a64;"></i>
              <span>+91 95664 13628</span>
            </div>
            <div class="contact-row">
              <i class="fas fa-envelope" style="color: #025a64;"></i>
              <span>kalimuthutmindustries@gmail.com</span>
            </div>
            <div class="contact-row" style="margin-top: 10px;">
              <i class="fas fa-file-invoice" style="color: #025a64;"></i>
              <span>GST IN: 33BNZPK0667G1ZM</span>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div class="container">
          <p>
            © 2025 TM Industries | Copyrights held by
            <a
              href="https://www.xenoratechnologies.in"
              target="_blank"
              class="footer-link"
              >@XenoraTechnologies</a
            >
          </p>
          <p style="font-size: 0.7rem; margin-top: 10px;">
            GST IN:33BNZPK0667G1ZM | Precision Orthopedic Solutions
          </p>
        </div>
      </footer>
    </div>

    <!-- Product Modal -->
    <div id="productModal" class="modal">
      <div class="modal-card">
        <span class="close-modal">&times;</span>
        <div
          style="text-align: center; font-size: 3rem; color: #025a64"
          id="modalIcon"
        >
          <i class="fas fa-bone"></i>
        </div>
        <h3 id="modalTitle" style="margin: 15px 0">Product</h3>
        <p id="modalDesc">Detailed description for the product.</p>
        <div class="modal-actions" style="align-items: center; justify-content: center;gap: 40px;">
          <button
            id="modalCallBtn"
            class="submit-btn"
            style="background: #025a64"
          >
            <i class="fas fa-phone"></i> Call
          </button>
          <button
            id="modalWhatsBtn"
            class="submit-btn"
            style="background: #25d366"
          >
            <i class="fab fa-whatsapp"></i> WhatsApp
          </button>
        </div>
        <div
          style="
            background: #eef3f2;
            border-radius: 40px;
            padding: 10px;
            text-align: center;
          "
        >
          📞 +91 94439 13628
        </div>
      </div>
    </div>

    <!-- Success/Error Message Modal -->
    <div id="messageModal" class="modal" style="display: none;">
      <div class="modal-card" style="max-width: 400px;">
        <span class="close-modal" onclick="closeMessageModal()">&times;</span>
        <div
          style="text-align: center; font-size: 3rem; margin-bottom: 15px;"
          id="messageIcon"
        >
          <i class="fas fa-check-circle" style="color: #025a64;"></i>
        </div>
        <h3 id="messageTitle" style="margin: 15px 0; color: #025a64; font-size: 1.3rem;">Success!</h3>
        <p id="messageContent" style="text-align: center; margin-bottom: 20px; color: #666;">
          Your enquiry has been submitted successfully.
        </p>
        <button 
          onclick="closeMessageModal()" 
          class="submit-btn" 
          style="width: 100%; margin: 0;"
        >
          <i class="fas fa-check"></i> OK
        </button>
      </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <!-- EmailJS CDN -->
    <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
    <script>
      // Splash
      setTimeout(() => {
        let splash = document.getElementById("splashScreen");
        let main = document.getElementById("mainSite");
        splash.style.opacity = "0";
        setTimeout(() => {
          splash.style.display = "none";
          main.style.visibility = "visible";
          main.style.opacity = "1";
          AOS.refresh();
        }, 1000);
      }, 2300);

      // Product Data - Pediatric & Adult (exact lists)
      const pediatricProducts = [
        {
          productCode: "PRODUCT CODE: TMPT001",
          productNme: "Template for paediatric end clamp",
          productDesc:
            "A guiding structure that assists in the proper positioning of the end clamp and pins during surgery.",
          productImge:
            "template for paediatric end clamp.jpeg",
        },
        {
          productCode: "PRODUCT CODE: TMPC001",
          productNme: "Paediatric center clamp",
          productDesc:
            "A hardware structure designed for limb reconstruction systems in children, arranged in a linear manner.",
          productImge:
            "peadiatric center clamp.jpeg",
        },
        {
          productCode: "PRODUCT CODE: TMPRC001",
          productNme: "Paediatric rail",
          productDesc:
            "A linear structure designed for children, available in various lengths for the locking of clamps.",
          productImge:
            "paediatric rail.jpeg",
        },
        {
          productCode: "PRODUCT CODE: TMPS001",
          productNme: "Paediatric swivel clamp",
          productDesc:
            "A metal structure used for the reconstruction of bone in the knee joint.",
          productImge:
            "peadiatric swivel clamp.jpeg",
        },
        {
          productCode: "PRODUCT CODE: TMPE001",
          productNme: "Paediatric end clamp",
          productDesc:
            "A fixed frame used for the placement of pins at the end of a rail.",
          productImge:
            "paediatric end clamp.jpeg",
        },
      ];
      const adultProducts = [
        {
          productCode: "PRODUCT CODE: TMRL001",
          productName: "Rail",
          productDesc:
            "Long initial structure used for locking multiple clamps in a linear manner.",
          productImg: "rail.jpg",
        },
        {
          productCode: "PRODUCT CODE: TMEC001",
          productName: "End clamp",
          productDesc:
            "The top part will be placed between the enclosures.</br>3 pairs can be placed.",
          productImg: "End clamp.jpg",
        },
        {
          productCode: "PRODUCT CODE: TMCC001",
          productName: "Center clamp",
          productDesc:
            "The top part will be placed with only one enclosure.</br>This clamp can be used for lower link clamps.",
          productImg: "Center clamp.jpg",
        },
        {
          productCode: "PRODUCT CODE: TMSC001",
          productName: "Swivel clamp",
          productDesc:
            "The clamp can accommodate up to <b>3 pins</b> with angular variations.</br>Commonly used for <b>knee-area fractures</b> and reconstruction procedures.",
          productImg: "Swivel clamp.jpg",
        },
        {
          productCode: "PRODUCT CODE: TMGS001",
          productName: "Graduated swivel clamp",
          productDesc:
            "Similar in design to a standard swivel clamp.</br>Provides additional angular precision* through an external fixed support mechanism.",
          productImg:
            "Graduated swivel clamp.jpeg",
        },
        {
          productCode: "PRODUCT CODE: TMMC001",
          productName: "Metaficial clamp",
          productDesc:
            "An assembled component utilized to provide rigid, provisional, or definitive stabilization for complex fractures near joints.</br>Helps hold joint fragments in proper alignment during fracture fixation and reconstruction procedures.",
          productImg:
            "Metaficial clamp.jpeg",
        },
        {
          productCode: "PRODUCT CODE: TMTB001",
          productName: "T ball and socket clamp",
          productDesc:
            "The ball and socket joint permits multi-axial movement, allowing precise alignment of bone segments.",
          productImg:
            "T ball and socket clamp.jpg",
        },
        {
          productCode: "PRODUCT CODE: TMPPC001",
          productName: "Petrochanteric clamp",
          productDesc:
            "A specialized orthopedic frame used to stabilixe hip and femur fractures.utilized when the skin and soft tissues around the hip are severly damaged.",
          productImg:
            "Petrotrochanteric clamp.jpeg",
        },
        {
          productCode: "PRODUCT CODE: TMDRC001",
          productName: "Dyna ring clamp",
          productDesc:
            "The clamp is specialized for the treatment of severe open fractures, bad soft tissue damage and infected fractures.",
          productImg: "Dyna ring clamp.jpg",
        },
        {
          productCode: "PRODUCT CODE: TMTE001",
          productName: "Template for end/center clamp",
          productDesc:
            "A guiding frame used to ensure the precise placement of pins in the bone.",
          productImg:
            "Template for end clamp.jpg",
        },
        {
          productCode: "PRODUCT CODE: TMTS001",
          productName: "Template for swivel clamp",
          productDesc:
            "An orthopedic guiding frame that provides high precision in the placement of pins and swivel clamps.",
          productImg:
            "Template for swivel clamp.jpg",
        },
        {
          productCode: "PRODUCT CODE: TMCDV001",
          productName: "CD unit",
          productDesc:
            "A linear stainless-steel structure that fixes the center clamp and end clamp in a particular position.",
          productImg: "CD unit.jpg",
        },
        {
          productCode: "PRODUCT CODE: TMTB002",
          productName: "T ball and socket standard",
          productDesc:
            "The “T” configuration provides a movable clamp at either end of a rail, maximizing spacing when standard straight clamps do not leave enough space for metaphyseal osteotomy positioning.",
          productImg:
            "T ball and socket standard.jpg",
        },
        {
          productCode: "PRODUCT CODE: TMCP001",
          productName: "Plate bending press",
          productDesc:
            "A manual press system used to contour and shape metal bone plates so they perfectly match the anatomical curves of a patient’s bone.",
          productImg:
            "Plate bending press.jpg",
        },
        {
          productCode: "PRODUCT CODE: TMAWF001",
          productName: "Dynamic wrist and fore arm fixator",
          productDesc:
            "An external frame used to stabilize fractured, severely damaged, or deformed radius and ulna bones.",
          productImg:
            "Dynamic wrist and fore arm fixator.jpg",
        },
        {
          productCode: "PRODUCT CODE: TMCMC001",
          productName: "Mayfield skull clamp",
          productDesc:
            "Provides absolute head immobility while allowing surgeons to perform skull and spinal microsurgery with precision.",
          productImg:
            "Mayfield skull clamp.jpg",
        },
        {
          productCode: "PRODUCT CODE: TMAWF001",
          productName: "Coles wrist fixator",
          productDesc:
            "An orthopedic device used to stabilize a fractured distal radius (wrist bone).</br>A ball-and-socket structure is provided to allow angular movement and adjustment.",
          productImg:
            "Coles wrist fixator.jpg",
        },
        {
          productCode: "PRODUCT CODE: TMIN001",
          productName: "Nail remover set",
          productDesc:
            "This set is used to safely extract broken, damaged, or fully healed intramedullary (IM) rods and pins from long bones such as the femur and humerus.",
          productImg:
            "Nail remover set.jpg",
        },
        {
          productCode: "PRODUCT CODE: TMAWF001",
          productName: "Depth gauge",
          productDesc:
            "A stainless-steel measuring instrument used to determine the depth of a particular bone during surgery, with clearly marked measurement readings.",
          productImg: "Depth gauge.jpg",
        },
        {
          productCode: "CUSTOMISED IN ALL SIZE",
          productName: "Instrument box",
          productDesc:
            "A storage box that can be customized in various sizes according to customer requirements.",
          productImg: "Instrument box.jpg",
        },
        {
          productCode: "PRODUCT CODE: TMIBH001",
          productName: "Half pin introducer",
          productDesc:
            "A specific stainless-steel guidance tool used for the precise activation and positioning of drill bits.",
          productImg:
            "Half pin introducer.jpg",
        },
        {
          productCode: "PRODUCT CODE: TMEFC001",
          productName: "AO clamp",
          productDesc:
            "This clamp connects pins to rigid metal rods, creating an external scaffolding system to support severely broken bones.",
          productImg: "AO clamp.jpg",
        },
        {
          productCode: "PRODUCT CODE: TMIBS001",
          productName: "Broken screw removal set",
          productDesc:
            "Used to remove screws that have broken due to stress, fatigue, or improper insertion.The set includes hollow trephines that drill a cylindrical area around the screw head to expose its shaft, allowing it to be gripped and extracted.",
          productImg:
            "Broken screw removal set.jpg",
        },
        {
          productCode: "PRODUCT CODE: TMAAF001",
          productName: "Ankle fixator",
          productDesc:
            "A fixator designed for precise angular adjustment to stabilize complex bone structures without disturbing mobility.",
          productImg: "Ankle fixator.jpg",
        },
        {
          productCode: "PRODUCT CODE: TMADT001",
          productName: "Dynamic fixator t ball and socket -1",
          productDesc:
            "A fixator with a T-ball and socket frame, provided with an extendable support system and vertical axis movement.The adjustable area enhances patient comfort and allows controlled movement.",
          productImg:
            "Dynamic fixator T ball and socket - 1.jpg",
        },
        {
          productCode: "PRODUCT CODE: TMAFF001",
          productName: "Finger fixator-1",
          productDesc:
            "Holds severely shattered or displaced bone fragments securely in place while they heal.Often preferred when internal metal plates are not suitable",
          productImg:
            "Finger fixator - 1.jpg",
        },
        {
          productCode: "PRODUCT CODE: TMAFF002",
          productName: "Finger fixator-2",
          productDesc:
            "A fixation device designed to permit controlled movement of fingers during the healing process.",
          productImg:
            "Finger fixator - 2.jpg",
        },
        {
          productCode: "PRODUCT CODE: TMADR001",
          productName: "Distal radius fixator",
          productDesc:
            "This fixator is commonly applied in cases of complex wrist injuries where controlled external support is required.",
          productImg:
            "Distal radius fixator.jpg",
        },
        {
          productCode: "PRODUCT CODE: TMAGT001",
          productName: "Garches T clamp",
          productDesc:
            "Used to anchor smaller bone fragments or metaphyseal regions near the joint ends where a standard straight clamp will not fit.",
          productImg:
            "garches T clamp.jpeg",
        },
      ];

      function renderPediatric() {
        const grid = document.getElementById("pediatricGrid");
        grid.innerHTML = "";
        pediatricProducts.forEach((prod) => {
          const card = document.createElement("div");
          card.className = "product-card";
          card.innerHTML = `
                <div class="prod-code"><p>${prod.productCode}</p></div>
                <div class="prod-img"><img src="${prod.productImge}"  width="200" height="200"></div>
                <div class="prod-info"><h3>${prod.productNme}</h3>
                  <div class="prod-desc" style="font-size: 14px;font-family: sans-serif;font-style: italic; word-spacing: 2px;">
                    <p>${prod.productDesc}</p>
                  </div>
                  <button class="enq-pbtn" data-pname="${prod.productNme}"><i class="fas fa-clipboard"></i> Enquire for Purchase</button></div>
            `;
          grid.appendChild(card);
        });
        attachEnquiryButtons();
      }

      const adultSearchInput = document.getElementById("adultSearch");
      const adultSearchWrapper = document.getElementById("adultSearchWrapper");

      function renderAdult(products = adultProducts) {
        const grid = document.getElementById("adultGrid");
        grid.innerHTML = "";
        if (products.length === 0) {
          grid.innerHTML = `<div class="no-results">No adult products found for "${adultSearchInput.value.trim()}".</div>`;
          return;
        }
        products.forEach((prod) => {
          const card = document.createElement("div");
          card.className = "product-card";
          card.innerHTML = `
          <div class="prod-code"><p>${prod.productCode}</p></div>
                <div class="prod-img"><img src="${prod.productImg}"  width="200" height="200" ></div>
                <div class="prod-info"><h3>${prod.productName}</h3>
                <div class="prod-desc" style="font-size: 14px; font-family: sans-serif;font-style: italic; word-spacing: 2px; line-height: 1.4;">
                  <p>${prod.productDesc}</p>
                </div>
                <button class="enq-pbtn" data-pname="${prod.productName}"><i class="fas fa-clipboard"></i> Enquire for Purchase</button></div>
            `;
          grid.appendChild(card);
        });
        attachEnquiryButtons();
      }

      adultSearchInput.addEventListener("input", () => {
        const query = adultSearchInput.value.trim().toLowerCase();
        const filtered = adultProducts.filter((prod) => {
          return (
            prod.productName.toLowerCase().includes(query) ||
            prod.productDesc.toLowerCase().includes(query)
          );
        });
        renderAdult(filtered);
      });

      function attachEnquiryButtons() {
        document.querySelectorAll(".enq-pbtn").forEach((btn) => {
          btn.addEventListener("click", (e) => {
            let productName = btn.getAttribute("data-pname");
            openModalForProduct(productName);
            e.stopPropagation();
          });
        });
      }

      let currentEnquiryProduct = "";
      function openModalForProduct(pname) {
        currentEnquiryProduct = pname;
        document.getElementById("modalTitle").innerText = pname;
        document.getElementById("modalDesc").innerHTML =
          `Advanced orthopaedic solution: ${pname}. Request pricing & technical datasheet.`;
        document.getElementById("modalIcon").innerHTML =
          `<i class="fas fa-microscope"></i>`;
        document.getElementById("productModal").style.display = "flex";
      }

      // Modal actions
      const modalPhone = "+919443913628";
      document.getElementById("modalCallBtn").onclick = () =>
        (window.location.href = `tel:${modalPhone}`);
      document.getElementById("modalWhatsBtn").onclick = () => {
        let msg = `Hello TM Industries, I am interested in purchasing ${currentEnquiryProduct}. Please share details.`;
        window.open(
          `https://wa.me/${modalPhone.replace(/\+/g, "")}?text=${encodeURIComponent(msg)}`,
          "_blank",
        );
      };
      document.querySelector(".close-modal").onclick = () =>
        (document.getElementById("productModal").style.display = "none");
      window.onclick = (e) => {
        if (e.target === document.getElementById("productModal"))
          document.getElementById("productModal").style.display = "none";
      };

      // Tabs for adult
      const pedTab = document.querySelector('.tab-btn[data-cat="pediatric"]');
      const adultTab = document.querySelector('.tab-btn[data-cat="adult"]');
      const pedGrid = document.getElementById("pediatricGrid");
      const adultGrid = document.getElementById("adultGrid");

      function showPediatric() {
        pedGrid.style.display = "grid";
        adultGrid.style.display = "none";
        adultSearchWrapper.style.display = "none";
        pedTab.classList.add("active");
        adultTab.classList.remove("active");
      }
      function showAdult() {
        pedGrid.style.display = "none";
        adultGrid.style.display = "grid";
        adultSearchWrapper.style.display = "flex";
        adultTab.classList.add("active");
        pedTab.classList.remove("active");
      }
      pedTab.addEventListener("click", showPediatric);
      adultTab.addEventListener("click", showAdult);

      // Navigation between Home / Products / Contact
      const homeContainer = document.getElementById("homeContainer");
      const productsContainer = document.getElementById("productsContainer");
      const contactContainer = document.getElementById("contactContainer");
      const navBtns = document.querySelectorAll(".floating-btn");

      function setActiveNav(activeId) {
        navBtns.forEach((btn) => {
          if (btn.getAttribute("data-nav") === activeId)
            btn.classList.add("active");
          else btn.classList.remove("active");
        });
      }

      function showHome() {
        homeContainer.style.display = "block";
        productsContainer.style.display = "none";
        document.getElementById("aboutUs").style.display = "none";
        contactContainer.style.display = "none";
        setActiveNav("home");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      function showProducts() {
        homeContainer.style.display = "none";
        productsContainer.style.display = "block";
        document.getElementById("aboutUs").style.display = "none";
        contactContainer.style.display = "none";
        setActiveNav("products");
        if (pedGrid.children.length === 0) renderPediatric();
        if (adultGrid.children.length === 0) renderAdult();
        showPediatric();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      function showAbout() {
        homeContainer.style.display = "none";
        productsContainer.style.display = "none";
        document.getElementById("aboutUs").style.display = "block";
        contactContainer.style.display = "none";
        setActiveNav("about");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      function showContact() {
        homeContainer.style.display = "none";
        productsContainer.style.display = "none";
        document.getElementById("aboutUs").style.display = "none";
        contactContainer.style.display = "block";
        setActiveNav("contact");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      navBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          const nav = btn.getAttribute("data-nav");
          if (nav === "home") showHome();
          else if (nav === "products") showProducts();
          else if (nav === "about") showAbout();
          else if (nav === "contact") showContact();
        });
      });

      // Carousel infinite continuous loop (autoplay never stops)
      const swiper = new Swiper(".mySwiper", {
        loop: true,
        autoplay: { delay: 3200, disableOnInteraction: false },
        pagination: { el: ".swiper-pagination", clickable: true },
        speed: 900,
      });

      // Message Modal Functions
      function showMessageModal(title, message, type = "success") {
        const modal = document.getElementById("messageModal");
        const icon = document.getElementById("messageIcon");
        const titleEl = document.getElementById("messageTitle");
        const contentEl = document.getElementById("messageContent");

        titleEl.textContent = title;
        contentEl.textContent = message;

        if (type === "success") {
          icon.innerHTML = '<i class="fas fa-check-circle" style="color: #025a64;"></i>';
          titleEl.style.color = "#025a64";
        } else {
          icon.innerHTML = '<i class="fas fa-exclamation-circle" style="color: #d32f2f;"></i>';
          titleEl.style.color = "#d32f2f";
        }

        modal.style.display = "flex";
      }

      function closeMessageModal() {
        const modal = document.getElementById("messageModal");
        modal.style.display = "none";
      }

      // Close modal when clicking outside
      window.addEventListener("click", (e) => {
        const messageModal = document.getElementById("messageModal");
        if (e.target === messageModal) {
          closeMessageModal();
        }
      });

      // AOS init
      AOS.init({ duration: 800, once: true, offset: 20 });
      const pageIconElement = document.querySelector(".page-icon");
      window.addEventListener("scroll", () => {
        if (!pageIconElement) return;
        if (window.scrollY > 20) {
          pageIconElement.classList.add("page-icon-hidden");
        } else {
          pageIconElement.classList.remove("page-icon-hidden");
        }
      });
      // Ensure infinite scroll animation has continuous duplicated content
      const track = document.querySelector(".scroll-track");
      if (track && track.children.length < 12) {
        // duplicate more for smoothness
        const clone = track.innerHTML;
        track.innerHTML += clone;
      }
      showHome(); // default home
      renderPediatric();
      renderAdult();

      // ---- CONTACT FORM WITH WHATSAPP FIELD ----
      document.addEventListener("DOMContentLoaded", () => {
        const form = document.getElementById("enquiryForm");
        if (!form) return;

        // Use the globally defined showMessageModal or fallback
        const showModal = window.showMessageModal || function (title, msg, type) { alert(msg); };

        const EMAILJS_PUBLIC_KEY = "8d-k4wk6F_BMcWHz5"; // replace with your EmailJS public key
        const EMAILJS_SERVICE_ID = "service_iebf4dm"; // replace with your EmailJS service id
        const EMAILJS_TEMPLATE_ID = "template_0t1268r"; // replace with your EmailJS template id

        // Initialize EmailJS (emailjs object is loaded from CDN included in index.html)
        if (window.emailjs && typeof emailjs.init === "function") {
          try {
            emailjs.init(EMAILJS_PUBLIC_KEY);
          } catch (e) {
            // ignore init errors
          }
        }

        const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        const isValidPhone = (phone) => /^[0-9+\-\s]{7,20}$/.test(phone);

        form.addEventListener("submit", async (event) => {
          event.preventDefault();
          event.stopPropagation();

          const name = (form.querySelector("#name") || {}).value?.trim() || "";
          const phone = (form.querySelector("#phone") || {}).value?.trim() || "";
          const whatsapp = (form.querySelector("#whatsapp") || {}).value?.trim() || "";
          const email = (form.querySelector("#email") || {}).value?.trim() || "";
          const message = (form.querySelector("#message") || {}).value?.trim() || "";
          const submitBtn = form.querySelector(".submit-btn");

          if (!name || !phone || !email || !message) {
            showModal("Validation Error", "Please fill in all required fields.", "error");
            return;
          }

          if (!isValidEmail(email)) {
            showModal("Invalid Email", "Please enter a valid email address.", "error");
            return;
          }

          if (!isValidPhone(phone)) {
            showModal("Invalid Phone Number", "Please enter a valid phone number.", "error");
            return;
          }

          const originalButtonText = submitBtn ? submitBtn.innerHTML : "Submit";
          if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = "Sending...";
          }

          const templateParams = {
            name,
            phone,
            whatsapp: whatsapp || "Not provided",
            email,
            message,
          };

          if (!window.emailjs || typeof emailjs.send !== "function") {
            console.error("EmailJS not loaded");
            showModal("Error", "Failed to send enquiry. Please try again later.", "error");
            if (submitBtn) {
              submitBtn.disabled = false;
              submitBtn.innerHTML = originalButtonText;
            }
            return;
          }

          try {
            await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
            form.reset();
            showModal("Success!", "Thank you. Your enquiry has been submitted successfully. Our team will contact you shortly.", "success");
          } catch (err) {
            console.error("EmailJS send error:", err);
            showModal("Error", "Failed to send enquiry. Please try again later.", "error");
          } finally {
            if (submitBtn) {
              submitBtn.disabled = false;
              submitBtn.innerHTML = originalButtonText;
            }
          }
        });
      });
    </script>
  </body>
</html>
