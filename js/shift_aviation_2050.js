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
    
      
      
    
      var element = document.getElementById("5c7cf0e4-f985-478e-8299-8a0b585a6665");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '5c7cf0e4-f985-478e-8299-8a0b585a6665' but no matching script tag was found.")
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
                    
                  var docs_json = '{"b712c233-e98a-4765-b412-9a2a955f6dfc":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{},"id":"1011","type":"LinearScale"},{"attributes":{},"id":"1043","type":"BasicTickFormatter"},{"attributes":{"data":{"objectif_traj":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[300]},"oper_trj":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[300]},"ref_traj":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[300]},"tech_traj":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[300]},"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[300]}},"selected":{"id":"1050"},"selection_policy":{"id":"1049"}},"id":"1003","type":"ColumnDataSource"},{"attributes":{},"id":"1045","type":"AllLabels"},{"attributes":{"axis_label":"Emission [MtCO2]","formatter":{"id":"1043"},"major_label_policy":{"id":"1045"},"ticker":{"id":"1018"}},"id":"1017","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"oper_trj"}},"id":"1073","type":"Line"},{"attributes":{"axis":{"id":"1013"},"ticker":null},"id":"1016","type":"Grid"},{"attributes":{"label":{"value":"optimisation Operation"},"renderers":[{"id":"1074"}]},"id":"1087","type":"LegendItem"},{"attributes":{"label":{"value":"optimisation Technologique"},"renderers":[{"id":"1091"}]},"id":"1104","type":"LegendItem"},{"attributes":{"line_alpha":0.6,"line_color":"green","line_width":3,"x":{"field":"x"},"y":{"field":"tech_traj"}},"id":"1089","type":"Line"},{"attributes":{},"id":"1014","type":"BasicTicker"},{"attributes":{"axis_label":"year","formatter":{"id":"1046"},"major_label_policy":{"id":"1048"},"ticker":{"id":"1014"}},"id":"1013","type":"LinearAxis"},{"attributes":{"line_alpha":0.6,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"oper_trj"}},"id":"1072","type":"Line"},{"attributes":{"source":{"id":"1003"}},"id":"1075","type":"CDSView"},{"attributes":{"height":100,"sizing_mode":"fixed","width":200},"id":"1111","type":"Spacer"},{"attributes":{"end":30,"height":40,"js_property_callbacks":{"change:value":[{"id":"1108"}]},"sizing_mode":"fixed","start":0,"title":"Total Operation Optimisation factor in 2050 (%) ","value":10,"width":200},"id":"1106","type":"Slider"},{"attributes":{"axis":{"id":"1017"},"dimension":1,"ticker":null},"id":"1020","type":"Grid"},{"attributes":{},"id":"1005","type":"DataRange1d"},{"attributes":{},"id":"1009","type":"LinearScale"},{"attributes":{},"id":"1018","type":"BasicTicker"},{"attributes":{},"id":"1046","type":"BasicTickFormatter"},{"attributes":{},"id":"1048","type":"AllLabels"},{"attributes":{"args":{"opt_op":{"id":"1106"},"opt_tech":{"id":"1105"},"source":{"id":"1003"}},"code":"\\n    const data = source.data;\\n    const tech_percent = opt_tech.value;\\n    const op_perc = opt_op.value;\\n\\n    const x = data[&#x27;x&#x27;]\\n    const tech_traj = data[&#x27;tech_traj&#x27;]\\n    const ref_traj = data[&#x27;ref_traj&#x27;]\\n    const oper_trj = data[&#x27;oper_trj&#x27;]\\n    \\n    const factor_op = 1-(1-op_perc/100) ** (1/ (x.length) )\\n    const factor_tech = 1-(1-tech_percent/100) ** (1/ (x.length) )\\n    \\n    for (var i = 0; i &lt; x.length; i++) {\\n        oper_trj[i] = ref_traj[i] * (1 - factor_op) ** (i) ;\\n    }\\n    \\n    for (var i = 0; i &lt; x.length; i++) {\\n        tech_traj[i] = oper_trj[i] * (1 - factor_tech) ** (i) ;\\n    }\\n    \\n    source.change.emit();\\n"},"id":"1108","type":"CustomJS"},{"attributes":{},"id":"1023","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"1003"},"glyph":{"id":"1072"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1073"},"view":{"id":"1075"}},"id":"1074","type":"GlyphRenderer"},{"attributes":{},"id":"1049","type":"UnionRenderers"},{"attributes":{},"id":"1022","type":"PanTool"},{"attributes":{"active_drag":null,"active_multi":null,"tools":[{"id":"1021"},{"id":"1022"},{"id":"1023"},{"id":"1024"},{"id":"1025"},{"id":"1026"}]},"id":"1028","type":"Toolbar"},{"attributes":{},"id":"1021","type":"CrosshairTool"},{"attributes":{"children":[{"id":"1105"},{"id":"1106"}],"height":100,"sizing_mode":"fixed","width":200},"id":"1110","type":"Column"},{"attributes":{},"id":"1050","type":"Selection"},{"attributes":{"overlay":{"id":"1027"}},"id":"1024","type":"BoxZoomTool"},{"attributes":{},"id":"1025","type":"SaveTool"},{"attributes":{"click_policy":"mute","items":[{"id":"1053"},{"id":"1070"},{"id":"1087"},{"id":"1104"}],"label_text_font_size":"8pt","location":"top_left"},"id":"1052","type":"Legend"},{"attributes":{},"id":"1007","type":"DataRange1d"},{"attributes":{"data_source":{"id":"1003"},"glyph":{"id":"1055"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1056"},"view":{"id":"1058"}},"id":"1057","type":"GlyphRenderer"},{"attributes":{},"id":"1026","type":"ResetTool"},{"attributes":{"label":{"value":"Reference +4%/yr"},"renderers":[{"id":"1039"}]},"id":"1053","type":"LegendItem"},{"attributes":{"line_alpha":0.9,"line_color":"red","line_width":3,"x":{"field":"x"},"y":{"field":"ref_traj"}},"id":"1037","type":"Line"},{"attributes":{"children":[{"id":"1112"},{"id":"1004"}],"max_height":600,"max_width":750,"min_height":400,"sizing_mode":"stretch_both"},"id":"1113","type":"Column"},{"attributes":{"children":[{"id":"1110"},{"id":"1111"}],"height":100,"sizing_mode":"fixed","width":400},"id":"1112","type":"Row"},{"attributes":{"line_alpha":0.1,"line_color":"red","line_width":3,"x":{"field":"x"},"y":{"field":"ref_traj"}},"id":"1038","type":"Line"},{"attributes":{"line_alpha":0.1,"line_dash":[6],"line_width":3,"x":{"field":"x"},"y":{"field":"objectif_traj"}},"id":"1056","type":"Line"},{"attributes":{"background_fill_color":"#fafafa","below":[{"id":"1013"}],"center":[{"id":"1016"},{"id":"1020"},{"id":"1052"}],"height":500,"left":[{"id":"1017"}],"renderers":[{"id":"1039"},{"id":"1057"},{"id":"1074"},{"id":"1091"}],"sizing_mode":"stretch_both","title":{"id":"1041"},"toolbar":{"id":"1028"},"toolbar_location":"below","toolbar_sticky":false,"width":850,"x_range":{"id":"1005"},"x_scale":{"id":"1009"},"y_range":{"id":"1007"},"y_scale":{"id":"1011"}},"id":"1004","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"1003"}},"id":"1058","type":"CDSView"},{"attributes":{"line_alpha":0.6,"line_dash":[6],"line_width":3,"x":{"field":"x"},"y":{"field":"objectif_traj"}},"id":"1055","type":"Line"},{"attributes":{"source":{"id":"1003"}},"id":"1040","type":"CDSView"},{"attributes":{"data_source":{"id":"1003"},"glyph":{"id":"1089"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1090"},"view":{"id":"1092"}},"id":"1091","type":"GlyphRenderer"},{"attributes":{"end":100,"height":40,"js_property_callbacks":{"change:value":[{"id":"1108"}]},"sizing_mode":"fixed","start":0,"title":"Total Technological Optimisation factor in 2050 (%) ","value":50,"width":200},"id":"1105","type":"Slider"},{"attributes":{"text":"Evolution of the World total emission"},"id":"1041","type":"Title"},{"attributes":{"label":{"value":"Objectif -3.39%/yr"},"renderers":[{"id":"1057"}]},"id":"1070","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"green","line_width":3,"x":{"field":"x"},"y":{"field":"tech_traj"}},"id":"1090","type":"Line"},{"attributes":{"source":{"id":"1003"}},"id":"1092","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1027","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"1003"},"glyph":{"id":"1037"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1038"},"view":{"id":"1040"}},"id":"1039","type":"GlyphRenderer"}],"root_ids":["1113"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"b712c233-e98a-4765-b412-9a2a955f6dfc","root_ids":["1113"],"roots":{"1113":"5c7cf0e4-f985-478e-8299-8a0b585a6665"}}];
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