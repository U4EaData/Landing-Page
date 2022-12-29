// model image imports
import DavinciModel from "./images/U4Ea_DaVinci.png";
import davinciBlue from "./images/davinci-blue.png";
import davinciGreen from "./images/davinci-green.png";
import davinciIndigo from "./images/davinci-indigo.png";
import davinciOrange from "./images/davinci-orange.png";
import davinciRed from "./images/davinci-red.png";
import davinciViolet from "./images/davinci-violet.png";
import davinciYellow from "./images/davinci-yellow.png";

// chakra image imports
import imgGreen from "./images/journey-green.png";
import imgYellow from "./images/journey-yellow.png";
import imgRed from "./images/journey-red.png";
import imgOrange from "./images/journey-orange.jpg";
import imgBlue from "./images/journey-blue.jpg";
import imgPurple from "./images/journey-purple.jpg";
import imgIndigo from "./images/journey-indigo.jpg";

// spectrum image imports
import spectrumRed from "./images/spectrum-red.png";
import spectrumOrange from "./images/spectrum-orange.png";
import spectrumYellow from "./images/spectrum-yellow.png";
import spectrumBlue from "./images/spectrum-blue.png";
import spectrumGreen from "./images/spectrum-green.png";
import spectrumViolet from "./images/spectrum-violet.png";
import spectrumIndigo from "./images/spectrum-indigo.png";

// sound healing image imports
import soundHealingOrange from "./images/sound-healing-orange.png";
import soundHealingBlue from "./images/sound-healing-blue.png";
import soundHealingGreen from "./images/sound-healing-green.png";
import soundHealingTeal from "./images/sound-healing-teal.png";

// gland and organ image imports
import testicles from "./images/testicles.png";
import ovaries from "./images/ovaries.png";
import bladder from "./images/bladder.png";
import vagina from "./images/vagina.png";
import liver from "./images/liver.png";
import spleen from "./images/spleen.png";
import diaphram from "./images/diaphram.png";
import penis from "./images/penis.png";
import pancreas from "./images/pancreas.png";
import kidneys from "./images/kidneys.png";
import digestive from "./images/digestive.png";
import adrenals from "./images/adrenals.png";
import heart from "./images/heart.png";
import lungs from "./images/lungs.png";
import thymus from "./images/thymus.png";
import ears from "./images/ears.png";
import nose from "./images/nose.png";
import throat from "./images/throat.png";
import thyroid from "./images/thyroid.png";
import brain from "./images/brain.png";
import pituitary from "./images/pituitary.png";
import mindseye from "./images/mindseye.png";
import pineal from "./images/pineal.png";

const colors = [
  {
    id: "violet",
    title: "Crown",
    img: imgPurple,
    model: davinciViolet,
    spectrumImg: spectrumViolet,
    soundHealing: [
      soundHealingOrange,
      soundHealingTeal,
      soundHealingGreen,
      soundHealingBlue,
    ],
    energy: {
      energy: "Consciousness Energy Center",
      energyDesc:
        "Associated with one's Personal Belief System, this energy center interacts with our energetic connections.",
    },
    positives: "Bliss, Wisdom",
    negatives: "Confusion, Disconnection",
    symptomsDesc:
      "Dementia, Alzheimer's, Crisis of Faith, Cynical, Materialistic, Moody,  and...",
    tooltip: [
      {
        id: "pineal",
        content: "Pineal",
        img: pineal,
      },
    ],
  },
  {
    id: "indigo",
    title: "Mind",
    img: imgIndigo,
    model: davinciIndigo,
    spectrumImg: spectrumIndigo,
    soundHealing: [
      soundHealingOrange,
      soundHealingTeal,
      soundHealingGreen,
      soundHealingBlue,
    ],
    energy: {
      energy: "Inspiration Energy Center",
      energyDesc:
        "Associated with the Nervous System, this energy center interacts with our ability to make decisions",
    },
    positives: "Imaginative, Intuitive",
    negatives: "Intolerant, Conflicted",
    symptomsDesc:
      "Headaches, Blurred Vision, Blindness, Nightmares, Forgetful, Closed Minded, Distracted and...",
    tooltip: [
      {
        id: "brain",
        content: "Brain",
        img: brain,
      },
      {
        id: "pituitary",
        content: "Pituitary",
        img: pituitary,
      },
      {
        id: "mindseye",
        content: "Mind's Eye",
        img: mindseye,
      },
    ],
  },
  {
    id: "blue",
    title: "Throat",
    img: imgBlue,
    model: davinciBlue,
    spectrumImg: spectrumBlue,
    soundHealing: [
      soundHealingOrange,
      soundHealingTeal,
      soundHealingGreen,
      soundHealingBlue,
    ],
    energy: {
      energy: "Communication Energy Center",
      energyDesc:
        "Associated with  the Ears, Nose, and Throat (ENT) and the Vibratory System, this energy center interacts with our ability to sense and create vibrations.",
    },
    positives: "Truthful, Articulate",
    negatives: "Hostile, Aggressive",
    symptomsDesc:
      "Coughing, Colds, Sore Throat, Stiff Neck, Sinus and Inner Ear Infections, Thyroid Problems, Insecurity, Disruptive, and...",
    tooltip: [
      {
        id: "ears",
        content: "Ears",
        img: ears,
      },
      {
        id: "nose",
        content: "Nose",
        img: nose,
      },
      {
        id: "throat",
        content: "Throat",
        img: throat,
      },
      {
        id: "thyroid",
        content: "Thyroid",
        img: thyroid,
      },
    ],
  },
  {
    id: "green",
    title: "Heart",
    img: imgGreen,
    model: davinciGreen,
    spectrumImg: spectrumGreen,
    soundHealing: [
      soundHealingOrange,
      soundHealingTeal,
      soundHealingGreen,
      soundHealingBlue,
    ],
    energy: {
      energy: "Harmony Energy Center",
      energyDesc:
        "Associated with the Circulatory and Respiratory System, this energy center interacts with our connection to others and the environment.",
    },
    positives: "Confidence, Will Power",
    negatives: "Insecurity, Depression",
    symptomsDesc:
      "Impotence, Gallstones, Liver Failure, Mid-Lower Back Stiffness, Addiction, Insecurity, Grief and...",
    tooltip: [
      {
        id: "heart",
        content: "heart",
        img: heart,
      },
      {
        id: "lungs",
        content: "lungs",
        img: lungs,
      },
      {
        id: "thymus",
        content: "thymus",
        img: thymus,
      },
    ],
  },
  {
    id: "yellow",
    title: "Solar Plexus",
    img: imgYellow,
    model: davinciYellow,
    spectrumImg: spectrumYellow,
    soundHealing: [
      soundHealingOrange,
      soundHealingTeal,
      soundHealingGreen,
      soundHealingBlue,
    ],
    energy: {
      energy: "Self-Love Energy Center",
      energyDesc:
        "Associated with the adrenal system and our sex drive, this energy center interacts with the fluids in our bodies.",
    },
    positives: "Confidence, Will Power",
    negatives: "Insecurity, Depression",
    symptomsDesc:
      "Impotence, bladder and kidney probelms, mid-lower back stiffness, addiction, insecurity, grief",
    tooltip: [
      {
        id: "diaphragm",
        content: "Diaphragm",
        img: diaphram,
      },
      {
        id: "adrenals",
        content: "Adrenals",
        img: adrenals,
      },
      {
        id: "spleen",
        content: "Spleen",
        img: spleen,
      },
      {
        id: "liver",
        content: "Liver",
        img: liver,
      },
    ],
  },
  {
    id: "orange",
    title: "Sacral",
    name: "Orange",
    img: imgOrange,
    model: davinciOrange,
    spectrumImg: spectrumOrange,
    soundHealing: [
      soundHealingOrange,
      soundHealingTeal,
      soundHealingGreen,
      soundHealingBlue,
    ],
    energy: {
      energy: "Creative Energy Center",
      energyDesc:
        "Associated with the Digestive System and our Sex Drive, this energy center interacts with the fluids in our bodies.",
    },
    positives: "Joy, Friendliness",
    negatives: "Lonliness, Ridgidity",
    symptomsDesc:
      "Ulcers, diabetes, hypoglycemia, digestice disorders, lower back stiffness, compulsiveness, loneliness, frigidity, and...",
    tooltip: [
      {
        id: "digestive",
        content: "Digestive",
        img: digestive,
      },
      {
        id: "pancreas",
        content: "Pancreas",
        img: pancreas,
      },
      {
        id: "kidneys",
        content: "Kidneys",
        img: kidneys,
      },
      {
        id: "bladder",
        content: "Bladder",
        img: bladder,
      },
    ],
  },
  {
    id: "red",
    title: "Root",
    name: "Red",
    img: imgRed,
    model: davinciRed,
    spectrumImg: spectrumRed,
    soundHealing: [
      soundHealingOrange,
      soundHealingTeal,
      soundHealingGreen,
      soundHealingBlue,
    ],
    energy: {
      energy: "Passion Energy Center",
      energyDesc:
        "Associated with the reproductive system and out animal instincts, this energy center interacts with our survival instinct and fight or flight response.",
    },
    positives: "Fearlessness, Passionate",
    negatives: "Anger, Hatred",
    symptomsDesc:
      "Degenerative arthrithis, knee problems. sciatica, hermorrhoids, rectal inflammation, fear, instability, hopelessness, and...",
    tooltip: [
      {
        id: "testicles",
        content: "Testicles",
        img: testicles,
      },
      {
        id: "ovaries",
        content: "Ovaries",
        img: ovaries,
      },
      {
        id: "penis",
        content: "Penis",
        img: testicles,
      },
      {
        id: "vagina",
        content: "Vagina",
        img: bladder,
      },
    ],
  },
];

export default colors;
