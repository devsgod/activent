require.config({
    paths: {
      'requirejs': '',
      'jquery': '../vendor/jquery/dist/jquery',
      'TweenMax': '../vendor/greensock/src/uncompressed/TweenMax',
      'TweenLite': '../vendor/greensock/src/uncompressed/TweenLite',
      'TimelineMax': '../vendor/greensock/src/uncompressed/TimelineMax',
      'ScrollMagic': '../vendor/scrollmagic/scrollmagic/uncompressed/ScrollMagic',
      'jquery.ScrollMagic': '../vendor/scrollmagic/scrollmagic/uncompressed/plugins/jquery.ScrollMagic',
      'ScrollMagic.debug': '../vendor/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators',
      'animation.gsap': '../vendor/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap',
      'magnificPopup': '../vendor/magnific-popup/dist/jquery.magnific-popup',
      'slick': '../vendor/slick-carousel/slick/slick',
      'priorityNav': '../vendor/priority-nav.js/dist/priority-nav',
      'jquery.hoverintent': '../vendor/jquery-hoverintent/jquery.hoverIntent',
      'jquery.validate': '../vendor/jquery-validation/dist/jquery.validate.min',
      'js-cookie': '../vendor/js-cookie/src/js.cookie',
      'snapsvg': '../vendor/snapsvg/dist/snap.svg'
    },
  
    map: {
      // '*' means all modules will get 'jquery-private'
      // for their 'jquery' dependency.
      '*': { 'jquery': 'jquery-private' },
  
      // 'jquery-private' wants the real jQuery module
      // though. If this line was not here, there would
      // be an unresolvable cyclic dependency.
      'jquery-private': { 'jquery': 'jquery' }
  
  
      // see: https://requirejs.org/docs/jquery.html#noconflictmap
    },
  
    shim: {
      'jquery': {
        exports: '$'
      },
      'jquery.ScrollMagic': {
        deps: [
          'jquery'
        ]
      },
      'magnificPopup': {
        deps: [
          'jquery'
        ]
      },
      'slick': {
        deps: [
          'jquery'
        ]
      },
      'priorityNav': {
        deps: [
          'jquery'
        ]
      },
      'jquery.hoverintent': {
        deps: [
          'jquery'
        ]
      },
      'jquery.validate': {
        deps: [
          'jquery'
        ]
      },
      'js-cookie': {
        deps: [
          'jquery'
        ]
      },
      'snapsvg': {
        exports: 'Snap'
      }
    },
  
    waitSeconds: 120
  });