import {API_ROOT_URL} from '../constants';
import useIsVisible from '../hooks/useIsVisible';
import useStickySWR from '../hooks/useStickySWR';
import {fetcher} from '../utils/commonFunctions';
import './Welcome.css'
import classnames from 'classnames';
import React, {useEffect,useState, useRef, lazy, Suspense} from 'react';
import {Helmet} from 'react-helmet';
import {useLocation} from 'react-router-dom';
import {useLocalStorage, useSessionStorage, useWindowSize} from 'react-use';
import api from '../services/api';

const TimeseriesExplorer = lazy(() => import('./TimeseriesExplorer'));
const MapExplorer = lazy(() => import('./MapExplorer'));
const Actions = lazy(() => import('./Actions'));
const Table = lazy(() => import('./Table'));
const Minigraphs = lazy(() => import('./Minigraphs'));
const Footer = lazy(() => import('./Footer'));
const Search = lazy(() => import('./Search'));
const Level = lazy(() => import('./Level'));
const MapSwitcherWel = lazy(() => import('./MapSwitcherWel'));
const StateHeader = lazy(() => import('./StateHeader'));

function Welcome() {

    const [doencas, setDoencas] = useState([]);
    const [dados, setDados] = useState()
    const [selectedDoenca, setSelectedDoenca] = useState()

useEffect(() => {
    api.get('/doencas').then((response) => {
        setDoencas(response.data);
    });

    api.get('/casos').then((response) => {
        setDoencas(response.data);
    });
}, []);
  const [regionHighlighted, setRegionHighlighted] = useState({
    stateCode: 'TT',
    districtName: null,
  });

  const [anchor, setAnchor] = useLocalStorage('anchor', null);
  const [expandTable, setExpandTable] = useLocalStorage('expandTable', false);
  const [mapStatistic, setMapStatistic] = useSessionStorage(
    'mapStatistic',
    'active'
  );
  const [date, setDate] = useState('');
  const location = useLocation();


const timeseries = 
  {
    "AN": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "AP": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "AR": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "AS": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "BR": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "CH": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "CT": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "DL": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "DN": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "GA": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "GJ": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "HP": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "HR": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "JH": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "JK": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "KA": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "KL": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "LA": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "LD": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "MH": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "ML": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "MN": {
     "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "MP": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "MZ": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "NL": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "OR": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "PB": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "PY": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "RJ": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "SK": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "TG": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "TN": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "TR": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "TT": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "UN": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "UP": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "UT": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "WB": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    }
  }

  const {data} = useStickySWR(
    `${API_ROOT_URL}/data${date ? `-${date}` : ''}.min.json`,
    fetcher,
    {
      revalidateOnMount: true,
      refreshInterval: 100000,
    }
  );

  const homeRightElement = useRef();
  const isVisible = useIsVisible(homeRightElement);
  const {width} = useWindowSize();

  return (
    <React.Fragment>
      <Helmet>
        <title>Coronavirus em Angola - covid19angola.org</title>
        <meta
          name="title"
          content="Coronavirus em Angola: Latest Map and Case Count"
        />
      </Helmet>

      <div className="Home">
        <div className={classnames('home-left', {expanded: expandTable})}>
          <div className="header">
            <Suspense fallback={<div />}>
              <Search />
            </Suspense>
            <Suspense fallback={<div />}>
                <select name='id_doenca' className="selectSwitch" onChange={(e)=> setSelectedDoenca(e.target.value)}>
                    {
                        doencas.map((item, index) => (
                            <option value={item.id}> {item.nome} </option>
                        ))
                    }
                    
                </select>
            </Suspense>
          </div>

          <div style={{position: 'relative', marginTop: '1rem'}}>
              <Suspense fallback={<div style={{height: '50rem'}} />}>
                {width > 769 && (
                  <MapSwitcherWel {...{mapStatistic, setMapStatistic}} dataCovid={{confirmed: 110, active: 45, recovered: 14, deceased: 9}} />
                )}
              </Suspense>
          </div>
        </div>
      </div>

      {isVisible && (
        <Suspense fallback={<div />}>
          <Footer />
        </Suspense>
      )}
    </React.Fragment>
  );
}

export default Welcome;
