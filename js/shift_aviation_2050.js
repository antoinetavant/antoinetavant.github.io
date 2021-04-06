(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("5459a3f1-5ee0-45a6-a0c3-4f996e38ef2b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '5459a3f1-5ee0-45a6-a0c3-4f996e38ef2b' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.3.0.min.js": "HjagQp6T0/7bxYTAXbLotF1MLAGWmhkY5siA1Gc/pcEgvgRPtMsRn0gQtMwGKiw1", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.0.min.js": "ZEPPTjL+mdyqgIq+/pl9KTwzji8Kow2NnI3zWY8+sFinWP/SYJ80BnfeJsa45iYj", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.0.min.js": "exLqv2ACDRIaV7ZK1iL8aGzGYQvKVuT3U2CT7FsQREBxRah6JrkVCoFy0koY1YqV"};
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.3.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.0.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"caeb1622-4e98-4578-98a8-6683fc01c987":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{"children":[{"id":"2411"},{"id":"2304"}],"sizing_mode":"fixed"},"id":"2412","type":"Column"},{"attributes":{"line_alpha":0.1,"line_color":"red","line_width":3,"x":{"field":"x"},"y":{"field":"ref_traj"}},"id":"2337","type":"Line"},{"attributes":{"line_alpha":0.6,"line_color":"green","line_width":3,"x":{"field":"x"},"y":{"field":"tech_traj"}},"id":"2388","type":"Line"},{"attributes":{"axis":{"id":"2317"},"dimension":1,"ticker":null},"id":"2320","type":"Grid"},{"attributes":{},"id":"2343","type":"BasicTickFormatter"},{"attributes":{},"id":"2325","type":"SaveTool"},{"attributes":{"children":[{"id":"2409"},{"id":"2410"}],"sizing_mode":"fixed"},"id":"2411","type":"Row"},{"attributes":{"line_alpha":0.9,"line_color":"red","line_width":3,"x":{"field":"x"},"y":{"field":"ref_traj"}},"id":"2336","type":"Line"},{"attributes":{"data":{"objectif_traj":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[300]},"oper_trj":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[300]},"ref_traj":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[300]},"tech_traj":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[300]},"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[300]}},"selected":{"id":"2349"},"selection_policy":{"id":"2348"}},"id":"2303","type":"ColumnDataSource"},{"attributes":{},"id":"2321","type":"CrosshairTool"},{"attributes":{"end":100,"js_property_callbacks":{"change:value":[{"id":"2407"}]},"start":0,"title":"Total Technological Optimisation factor in 2050 (%) ","value":50},"id":"2404","type":"Slider"},{"attributes":{"children":[{"id":"2404"},{"id":"2405"}]},"id":"2409","type":"Column"},{"attributes":{"active_multi":null,"tools":[{"id":"2321"},{"id":"2322"},{"id":"2323"},{"id":"2324"},{"id":"2325"},{"id":"2326"}]},"id":"2328","type":"Toolbar"},{"attributes":{},"id":"2346","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"2303"}},"id":"2391","type":"CDSView"},{"attributes":{"axis_label":"Emission [MtCO2]","formatter":{"id":"2346"},"major_label_policy":{"id":"2345"},"ticker":{"id":"2318"}},"id":"2317","type":"LinearAxis"},{"attributes":{},"id":"2318","type":"BasicTicker"},{"attributes":{"axis_label":"year","formatter":{"id":"2343"},"major_label_policy":{"id":"2342"},"ticker":{"id":"2314"}},"id":"2313","type":"LinearAxis"},{"attributes":{"args":{"opt_op":{"id":"2405"},"opt_tech":{"id":"2404"},"source":{"id":"2303"}},"code":"\\n    const data = source.data;\\n    const tech_percent = opt_tech.value;\\n    const op_perc = opt_op.value;\\n\\n    const x = data[&#x27;x&#x27;]\\n    const tech_traj = data[&#x27;tech_traj&#x27;]\\n    const ref_traj = data[&#x27;ref_traj&#x27;]\\n    const oper_trj = data[&#x27;oper_trj&#x27;]\\n    \\n    const factor_op = 1-(1-op_perc/100) ** (1/ (x.length) )\\n    const factor_tech = 1-(1-tech_percent/100) ** (1/ (x.length) )\\n    \\n    for (var i = 0; i &lt; x.length; i++) {\\n        oper_trj[i] = ref_traj[i] * (1 - factor_op) ** (i) ;\\n    }\\n    \\n    for (var i = 0; i &lt; x.length; i++) {\\n        tech_traj[i] = oper_trj[i] * (1 - factor_tech) ** (i) ;\\n    }\\n    \\n    source.change.emit();\\n"},"id":"2407","type":"CustomJS"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"2327","type":"BoxAnnotation"},{"attributes":{"label":{"value":"optimisation Technologique"},"renderers":[{"id":"2390"}]},"id":"2403","type":"LegendItem"},{"attributes":{"label":{"value":"Objectif -3.39%/yr"},"renderers":[{"id":"2356"}]},"id":"2369","type":"LegendItem"},{"attributes":{},"id":"2342","type":"AllLabels"},{"attributes":{"line_alpha":0.1,"line_color":"green","line_width":3,"x":{"field":"x"},"y":{"field":"tech_traj"}},"id":"2389","type":"Line"},{"attributes":{"click_policy":"mute","items":[{"id":"2352"},{"id":"2369"},{"id":"2386"},{"id":"2403"}],"location":"top_left"},"id":"2351","type":"Legend"},{"attributes":{"source":{"id":"2303"}},"id":"2374","type":"CDSView"},{"attributes":{"source":{"id":"2303"}},"id":"2357","type":"CDSView"},{"attributes":{"source":{"id":"2303"}},"id":"2339","type":"CDSView"},{"attributes":{"axis":{"id":"2313"},"ticker":null},"id":"2316","type":"Grid"},{"attributes":{"data_source":{"id":"2303"},"glyph":{"id":"2336"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2337"},"view":{"id":"2339"}},"id":"2338","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"2327"}},"id":"2324","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"2303"},"glyph":{"id":"2354"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2355"},"view":{"id":"2357"}},"id":"2356","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Reference +4%/yr"},"renderers":[{"id":"2338"}]},"id":"2352","type":"LegendItem"},{"attributes":{},"id":"2345","type":"AllLabels"},{"attributes":{},"id":"2326","type":"ResetTool"},{"attributes":{},"id":"2349","type":"Selection"},{"attributes":{},"id":"2323","type":"WheelZoomTool"},{"attributes":{},"id":"2348","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"oper_trj"}},"id":"2372","type":"Line"},{"attributes":{"data_source":{"id":"2303"},"glyph":{"id":"2388"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2389"},"view":{"id":"2391"}},"id":"2390","type":"GlyphRenderer"},{"attributes":{},"id":"2322","type":"PanTool"},{"attributes":{},"id":"2410","type":"Spacer"},{"attributes":{},"id":"2305","type":"DataRange1d"},{"attributes":{},"id":"2307","type":"DataRange1d"},{"attributes":{"data_source":{"id":"2303"},"glyph":{"id":"2371"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2372"},"view":{"id":"2374"}},"id":"2373","type":"GlyphRenderer"},{"attributes":{},"id":"2314","type":"BasicTicker"},{"attributes":{"background_fill_color":"#fafafa","below":[{"id":"2313"}],"center":[{"id":"2316"},{"id":"2320"},{"id":"2351"}],"height":400,"left":[{"id":"2317"}],"renderers":[{"id":"2338"},{"id":"2356"},{"id":"2373"},{"id":"2390"}],"sizing_mode":"fixed","title":{"id":"2340"},"toolbar":{"id":"2328"},"toolbar_location":"below","toolbar_sticky":false,"width":850,"x_range":{"id":"2305"},"x_scale":{"id":"2309"},"y_range":{"id":"2307"},"y_scale":{"id":"2311"}},"id":"2304","subtype":"Figure","type":"Plot"},{"attributes":{"end":30,"js_property_callbacks":{"change:value":[{"id":"2407"}]},"start":0,"title":"Total Operation Optimisation factor in 2050 (%) ","value":10},"id":"2405","type":"Slider"},{"attributes":{"line_alpha":0.6,"line_dash":[6],"line_width":3,"x":{"field":"x"},"y":{"field":"objectif_traj"}},"id":"2354","type":"Line"},{"attributes":{"text":"Evolution of the World total emission"},"id":"2340","type":"Title"},{"attributes":{"label":{"value":"optimisation Operation"},"renderers":[{"id":"2373"}]},"id":"2386","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_dash":[6],"line_width":3,"x":{"field":"x"},"y":{"field":"objectif_traj"}},"id":"2355","type":"Line"},{"attributes":{"line_alpha":0.6,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"oper_trj"}},"id":"2371","type":"Line"},{"attributes":{},"id":"2311","type":"LinearScale"},{"attributes":{},"id":"2309","type":"LinearScale"}],"root_ids":["2412"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"caeb1622-4e98-4578-98a8-6683fc01c987","root_ids":["2412"],"roots":{"2412":"5459a3f1-5ee0-45a6-a0c3-4f996e38ef2b"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();