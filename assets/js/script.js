// Tree data from:
// https://forestryandland.gov.scot/learn/trees
// A list of trees to use in the game.
const TREE_DATABASE = [
    {
      name: 'Ash',
      description: 'These tall, domed trees can reach up to 40 metres in height. The leaves are arranged in pairs whilst the single-winged seeds grow in bunches. The bark starts smooth and greenish-grey before turning grey and fissured with age.',
      type: 'Broadleaf',
        imgLink:
        "https://forestryandland.gov.scot/images/learn/treespecies/ash-botanical.jpg",
    },
    {
        name: 'Ash',
        description: 'These tall, domed trees can reach up to 40 metres in height. The leaves are arranged in pairs whilst the single-winged seeds grow in bunches. The bark starts smooth and greenish-grey before turning grey and fissured with age.',
        type: 'Broadleaf',
          imgLink:
          "https://forestryandland.gov.scot/images/learn/treespecies/ash-botanical.jpg",
      },
    {
      name: 'Beech',
      description: 'Mature beech treess have a dense canopy made up of many branches. Its husks split to release two triangular seeds which can be eaten or roasted to make a type of coffee. The bark is smooth, grey and delicate – making it a popular tree for lovers to carve their initials into.',
      type: 'Broadleaf',
      imgLink:
        "https://forestryandland.gov.scot/images/learn/treespecies/beech-botanical.jpg",
    },
    {
        name: 'Beech',
        description: 'Mature beech treess have a dense canopy made up of many branches. Its husks split to release two triangular seeds which can be eaten or roasted to make a type of coffee. The bark is smooth, grey and delicate – making it a popular tree for lovers to carve their initials into.',
        type: 'Broadleaf',
        imgLink:
          "https://forestryandland.gov.scot/images/learn/treespecies/beech-botanical.jpg",
      },
    {
      name: 'Corsican pine',
      description: 'This slender, conical tree can reach up to 27 metres tall with horizontal branches. Its needles are long, grouped in pairs and have a distinctive twist. Its fissured, dark greyish-brown bark breaks off easily.',
      type: 'Coniferous',
      imgLink:
        "https://forestryandland.gov.scot/images/learn/treespecies/corsican-pine-botanical.jpg",
    },
    {
        name: 'Corsican pine',
        description: 'This slender, conical tree can reach up to 27 metres tall with horizontal branches. Its needles are long, grouped in pairs and have a distinctive twist. Its fissured, dark greyish-brown bark breaks off easily.',
        type: 'Coniferous',
        imgLink:
          "https://forestryandland.gov.scot/images/learn/treespecies/corsican-pine-botanical.jpg",
      },
    {
      name: 'Douglas fir',
      description: 'The Douglas fir can grow to be very tall indeed, reaching up to 60 metres in Britain. It has soft needles with two grey bands underneath and oval shaped cones that hang downwards. Its bark is reddish-brown, fissured and corky.',
      type: 'Coniferous',
      imgLink:
        "https://forestryandland.gov.scot/images/learn/treespecies/douglas-fir-botanical.jpg",
    },
    {
        name: 'Douglas fir',
        description: 'The Douglas fir can grow to be very tall indeed, reaching up to 60 metres in Britain. It has soft needles with two grey bands underneath and oval shaped cones that hang downwards. Its bark is reddish-brown, fissured and corky.',
        type: 'Coniferous',
        imgLink:
          "https://forestryandland.gov.scot/images/learn/treespecies/douglas-fir-botanical.jpg",
      },
    {
      name: 'Hazel',
      description: 'This tree usually resembles a shrub, but can reach seven metres if left uncut. In October ripe nuts enclosed in leafy bracts appear, whilst in late winter, male flowers form ‘lambs-tail’ catkins. The bark is smooth, shiny brown with conspicuous yellow lenticels and scaly patches.',
      type: 'Broadleaf',
      imgLink:
        "https://forestryandland.gov.scot/images/learn/treespecies/hazel-botanical.jpg",
    },
    {
        name: 'Hazel',
        description: 'This tree usually resembles a shrub, but can reach seven metres if left uncut. In October ripe nuts enclosed in leafy bracts appear, whilst in late winter, male flowers form ‘lambs-tail’ catkins. The bark is smooth, shiny brown with conspicuous yellow lenticels and scaly patches.',
        type: 'Broadleaf',
        imgLink:
          "https://forestryandland.gov.scot/images/learn/treespecies/hazel-botanical.jpg",
      },
    {
      name: 'Hybrid larch',
      description: 'The hybrid larch can grow to 40 metres in height. It grows deciduous needles in rosettes on short shoots, and reddish purple flowers which form cylindrical cones with rounded scales. Its grey-brown bark is fissured into regular plates.',
      type: 'Coniferous',
      imgLink:
        "https://forestryandland.gov.scot/images/learn/treespecies/hybrid-larch-botanical.jpg",
    },
    {
        name: 'Hybrid larch',
        description: 'The hybrid larch can grow to 40 metres in height. It grows deciduous needles in rosettes on short shoots, and reddish purple flowers which form cylindrical cones with rounded scales. Its grey-brown bark is fissured into regular plates.',
        type: 'Coniferous',
        imgLink:
          "https://forestryandland.gov.scot/images/learn/treespecies/hybrid-larch-botanical.jpg",
      },
    {
      name: 'Lodgepole pine',
      description: 'A thin and narrow-crowned tree which grows to 40-50 metres. It has twisted yellowish-green needles found in pairs that measure 5–8 cm long and cones with prickly scales. The bark is variable but typically red-brown with fine curled flakes.',
      type: 'Coniferous',
      imgLink:
        "https://forestryandland.gov.scot/images/learn/treespecies/lodgepole-pine-botanical.jpg",
    },
    {
        name: 'Lodgepole pine',
        description: 'A thin and narrow-crowned tree which grows to 40-50 metres. It has twisted yellowish-green needles found in pairs that measure 5–8 cm long and cones with prickly scales. The bark is variable but typically red-brown with fine curled flakes.',
        type: 'Coniferous',
        imgLink:
          "https://forestryandland.gov.scot/images/learn/treespecies/lodgepole-pine-botanical.jpg",
      },
    {
      name: 'Noble fir',
      description: 'A handsome conifer which can reach 45 metres in height. It has long upswept bluish-grey needles and large upright cones with downturned feathery bracts. The smooth bark is pale grey to purplish.',
      type: 'Coniferous',
      imgLink:
          "https://forestryandland.gov.scot/images/learn/treespecies/noble-fir-botanical.jpg",
    },
    {
        name: 'Noble fir',
        description: 'A handsome conifer which can reach 45 metres in height. It has long upswept bluish-grey needles and large upright cones with downturned feathery bracts. The smooth bark is pale grey to purplish.',
        type: 'Coniferous',
        imgLink:
            "https://forestryandland.gov.scot/images/learn/treespecies/noble-fir-botanical.jpg",
      },
    {
      name: 'Norway Spruce',
      description: 'A conically shaped tree reaching up to 40 metres in height. It has long cylindrical brown cones which hang down and pointed mid-green needles standing on tiny pegs. The smooth bark is greyish-brown with a rusty tint.',
      type: 'Coniferous',
      imgLink:
        "https://forestryandland.gov.scot/images/learn/treespecies/norway-spruce-botanical.jpg",
    },
    {
        name: 'Norway Spruce',
        description: 'A conically shaped tree reaching up to 40 metres in height. It has long cylindrical brown cones which hang down and pointed mid-green needles standing on tiny pegs. The smooth bark is greyish-brown with a rusty tint.',
        type: 'Coniferous',
        imgLink:
          "https://forestryandland.gov.scot/images/learn/treespecies/norway-spruce-botanical.jpg",
      },
    {
      name: 'Oak`',
      description: 'This broad spreading tree can reach up to 30 metres in Scotland. Most do not produce acorns until they are over 50 years old. The oak’s acorns are carried on long stalks or ‘peduncles’.',
      type: 'Coniferous',
      imgLink:
        "https://forestryandland.gov.scot/images/learn/treespecies/oak-botanical.jpg",
    },
    {
        name: 'Oak`',
        description: 'This broad spreading tree can reach up to 30 metres in Scotland. Most do not produce acorns until they are over 50 years old. The oak’s acorns are carried on long stalks or ‘peduncles’.',
        type: 'Coniferous',
        imgLink:
          "https://forestryandland.gov.scot/images/learn/treespecies/oak-botanical.jpg",
      },
  ];

  const cardsContainer = document.querySelector("#cards"); // cardsContainer is cards div from index