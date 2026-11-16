export const curriculum = {
  year1: {
    sem1: {
      title: 'First Year — First Semester',
      subjects: [
        { code: 'ADOPMNGT', name: 'Administrative Office Procedure and Management', units: 3 },
        { code: 'ADWOVAAC', name: 'Administrative Work Values and Accountability', units: 3 },
        { code: 'HURSMNGT', name: 'Human Resource Management', units: 3 },
        { code: 'KEYDOCPR', name: 'Keyboarding and Documents Processing 1', units: 3 },
        { code: 'ORGNMNGT', name: 'Management (Organization and Management)', units: 3 },
        { code: 'GEPEMOVE', name: 'Movement Enhancement', units: 2 },
        { code: 'GEREADPH', name: 'Readings in Philippine History', units: 3 },
        { code: 'GEUNDETS', name: 'Understanding the Self', units: 3 },
        { code: 'NSTP-CWTS_1', name: 'NSTP Civic Welfare Training Service 1', units: 3 },
      ],
    },
    sem2: {
      title: 'First Year — Second Semester',
      subjects: [
        { code: 'GEETHICS', name: 'Ethics', units: 3 },
        { code: 'GEPEFITE', name: 'Fitness Exercises', units: 2 },
        { code: 'GOVSORES', name: 'Good Governance and Social Responsibility', units: 3 },
        { code: 'GEKOMFIL', name: 'Kontekstwalisadong Komunikasyon sa Filipino', units: 3 },
        { code: 'GEMATHMW', name: 'Mathematics in the Modern World', units: 3 },
        { code: 'NSTP-CWTS_2', name: 'NSTP Civic Welfare Training Service 2', units: 3 },
        { code: 'RCRTSELC', name: 'Recruitment and Selection', units: 3 },
      ],
    },
  },
  year2: {
    sem1: {
      title: 'Second Year — First Semester',
      subjects: [
        { code: 'ACCOUNT1', name: 'Accounting for Service and Trading Industry', units: 3 },
        { code: 'GEFILDIS', name: "Filipino sa Iba't Ibang Disiplina", units: 3 },
        { code: 'LBRLWLEG', name: 'Labor Laws and Legislation', units: 3 },
        { code: 'MICROECO', name: 'Microeconomics', units: 3 },
        { code: 'OPTNMNGT', name: 'Operations Management (TQM)', units: 3 },
        { code: 'GEPEHEF1', name: 'Physical Activity Towards Health and Fitness 1', units: 2 },
        { code: 'GESCIENTS', name: 'Science, Technology and Society', units: 3 },
        { code: 'TRNGDEVT', name: 'Training and Development', units: 3 },
      ],
    },
    sem2: {
      title: 'Second Year — Second Semester',
      subjects: [
        { code: 'ACCOUNT2', name: 'Accounting for Merchandising Industry', units: 3 },
        { code: 'GEARTAPP', name: 'Art Appreciation', units: 3 },
        { code: 'COMPEADM', name: 'Compensation Administration', units: 3 },
        { code: 'ENTREMGT', name: 'Entrepreneurial Management', units: 3 },
        { code: 'LBRRLNEG', name: 'Labor Relations & Negotiations', units: 3 },
        { code: 'GEPEHEF2', name: 'Physical Activity Towards Health and Fitness II', units: 2 },
        { code: 'GECONTWO', name: 'The Contemporary World', units: 3 },
      ],
    },
  },
  year3: {
    sem1: {
      title: 'Third Year — First Semester',
      subjects: [
        { code: 'HRBUSRS1', name: 'Business Research in HRM (Thesis 1)', units: 3 },
        { code: 'INCMTAXN', name: 'Income Taxation', units: 3 },
        { code: 'GEPHILIT', name: 'Philippine Literature', units: 3 },
        { code: 'PROJMNGT', name: 'Project Management', units: 3 },
        { code: 'GEPURPCO', name: 'Purposive Communication', units: 3 },
        { code: 'GELIFEWR', name: 'The Life and Works of Rizal', units: 3 },
      ],
    },
    sem2: {
      title: 'Third Year — Second Semester',
      subjects: [
        { code: 'HRBUSRS2', name: 'Business Research in HRM (Thesis 2)', units: 3 },
        { code: 'FRANCHIS', name: 'Franchising', units: 3 },
        { code: 'INTLBATT', name: 'International Business and Trade', units: 3 },
        { code: 'MGRLACCT', name: 'Managerial Accounting', units: 3 },
        { code: 'ORGNDEVT', name: 'Organizational Development', units: 3 },
        { code: 'BUSTAXN', name: 'Taxation 2 (Business Taxation)', units: 3 },
      ],
    },
  },
 year4: {
    sem1: {
      title: 'Fourth Year — First Semester',
      subjects: [
        { code: 'BUSLWOBL', name: 'Business Law (Obligations & Contract)', units: 3 },
        { code: 'SPCLHRDM', name: 'Special Topics in HRM', units: 3 },
        { code: 'STRAMNGT', name: 'Strategic Management', units: 3 },
      ],
    },
    sem2: {
      title: 'Fourth Year — Second Semester',
      subjects: [
        { code: 'HRDMPRAC', name: 'HRM Practicum (600 hours)', units: 6 },
      ],
    },
  },
};

export const getTotalUnits = (semData) =>
  semData.subjects.reduce((sum, s) => sum + s.units, 0);