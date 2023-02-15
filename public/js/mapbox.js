export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoibmhyLTIwMjMiLCJhIjoiY2xlNDRoeXYxMGFxMDNvcGcyZG4yYWl5MyJ9.EG85ZCqQlMmBQWHUbbHq5Q';

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/nhr-2023/cle4558g0001a01o3nhubkgxm',
    scrollZoom: false,
    // center: [-118.143038, 33.851118],
    // zoom: 10,
    // interactive: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // create marker
    const el = document.createElement('div');
    el.classList = 'marker';

    // add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // add popup
    new mapboxgl.Popup({ closeOnClick: false, offset: 30 })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // extends map bounds to include current locations
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
