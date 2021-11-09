const SLIDER_PARAMETERS = {
  'chrome': {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    connect: 'lower',
  },
  'sepia': {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    connect: 'lower',
  },
  'marvin': {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
    connect: 'lower',
    format: {
      to: (value) => `${value}%`,
      from: (value) => Number(value.replace('%', '')),
    },
  },
  'phobos': {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    connect: 'lower',
    format: {
      to: (value) => `${value}px`,
      from: (value) => Number(value.replace('px', '')),
    },
  },
  'heat': {
    range: {
      min: 1,
      max: 3,
    },
    start: 3,
    step: 0.1,
    connect: 'lower',
  },
};

const FILTERS = {
  'chrome': 'grayscale',
  'sepia': 'sepia',
  'marvin': 'invert',
  'phobos': 'blur',
  'heat': 'brightness',
};

const imgPreview = document.querySelector('.img-upload__preview img');
const effectsList = document.querySelector('.effects__list');
const effectSlider = document.querySelector('.effect-level__slider');
const effectValue = document.querySelector('.effect-level__value');
const effectLevel = document.querySelector('.effect-level');

effectsList.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('effects__radio')) {
    const currentEffectValue = evt.target.value;
    effectLevel.classList.remove('hidden');

    if (currentEffectValue === 'none') {
      imgPreview.className = '';
      effectSlider.noUiSlider.destroy();
      effectLevel.remove();
    } else {
      if (!effectSlider.noUiSlider) {
        noUiSlider.create(effectSlider, SLIDER_PARAMETERS[currentEffectValue]);
      }
      imgPreview.className = `effects__preview--${currentEffectValue}`;
      effectSlider.noUiSlider.off('update');
      effectSlider.noUiSlider.on('update', (value, handle, unencoded) => {
        imgPreview.style.filter = `${FILTERS[currentEffectValue]}(${value[handle]})`;
        effectValue.value = unencoded[handle];
      });
    }
  }
});

const resetFilter = () => {
  imgPreview.style.filter = 'none';
};

export { resetFilter };
