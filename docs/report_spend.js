"use strict";
(function(){
var T=RPT.T.sp,DEF0={"exp":{"A3":"Fixed Yearly Retirement Expenses","F3":"Before Medicare <65yrs","I3":"After Medicare at 65yrs","B4":"Monthly","C4":"Yearly","M4":"Starting Assets","P4":1500000,"A5":"Total","B5":"=SUM(B6:B25)","C5":"=SUM(C6:C25)","F5":"Fixed Yearly Retirement Expenses","G5":"=C5","I5":"Fixed Yearly Retirement Expenses","J5":"=E5","M5":"Total Expense in Retirement","P5":"=(G14*G18)+(J14*J18)","A6":"Car gas","B6":200,"C6":"=B6*12","F6":"Health Insurance","G6":"=AVGPRE(F3)","I6":"Health Insurance","J6":"=AVGPOST(F3)","A7":"Groceries","B7":500,"C7":"=B7*12","F7":"Travel","G7":"=AVGPRE(E3)","I7":"Travel","J7":"=AVGPOST(E3)","M7":"Ending Assets","P7":"=MAX(0,P4-P5)","A8":"Restaurants","B8":500,"C8":"=B8*12","F8":"Expense 1 (avg per year)","G8":"=AVGPRE(G3)","I8":"Expense 1 (avg per year)","J8":"=AVGPOST(G3)","F9":"Expense 2 (Avg per Year)","G9":"=AVGPRE(H3)","I9":"Expense 2 (Avg per Year)","J9":"=AVGPOST(H3)","A10":"Electricity","B10":100,"C10":"=B10*12","A11":"Gas Heating","B11":100,"C11":"=B11*12","F11":"Total Yearly Expense","G11":"=SUM(G5:G10)","I11":"Total Yearly Expense","J11":"=SUM(J5:J10)","A12":"water / sewer","B12":100,"C12":"=B12*12","F12":"Portfolio Gain (Avg per Year)","G12":"=CEIL(AVGPRE(J3),5000)","I12":"Portfolio Gain (Avg per Year)","J12":"=CEIL(AVGPOST(J3),5000)","A13":"Cell phone","B13":100,"C13":"=B13*12","F13":"SSN (Avg per Year)","G13":"=AVGPRE(K3)","I13":"SSN (Avg per Year)","J13":"=AVGPOST(K3)","A14":"Internet","B14":100,"C14":"=B14*12","F14":"Need from Portfolio (Avg per Year)","G14":"=AVGPRE(L3)","I14":"Need from Portfolio (Avg per Year)","J14":"=AVGPOST(L3)","I15":"Total savings to Portfolio (Avg per Year)","J15":"=AVGPOST(O3)","A16":"Repair (car,home)","B16":100,"C16":"=B16*12","F16":"Retirement Age","G16":"=MAX(P12,P13)","I16":"Age","J16":"=MAX(G17,G16)","A17":"Insu Car","B17":200,"C17":"=B17*12","F17":"Medicare Age","G17":65,"I17":"Maximum Age","J17":"=P14","A18":"Insu Home","B18":200,"C18":"=B18*12","F18":"Total Years","G18":"=MAX(0,MIN(G17,J17+1)-G16)","I18":"Total Years","J18":"=MAX(0,J17-J16+1)","A19":"Property Tax","B19":1000,"C19":"=B19*12","A20":"Income Tax","B20":1300,"C20":"=B20*12","A22":"General Expense 1","C22":"=B22*12","A23":"General Expense 2","C23":"=B23*12","F24":"Total funding from Portfolio","G24":"=ABS(G14*G18)","I24":"Total funding from Portfolio","J24":"=ABS(J14*J18)","A25":"Buffer","B25":500,"C25":"=B25*12","M10":"Portfolio gain","P10":0.04,"D6":100,"E6":"=D6*12","D7":250,"E7":"=D7*12","D8":250,"E8":"=D8*12","D10":50,"E10":"=D10*12","D11":50,"E11":"=D11*12","D12":50,"E12":"=D12*12","D13":50,"E13":"=D13*12","D14":50,"E14":"=D14*12","D16":50,"E16":"=D16*12","D17":100,"E17":"=D17*12","D18":100,"E18":"=D18*12","D19":500,"E19":"=D19*12","D20":650,"E20":"=D20*12","D25":250,"E25":"=D25*12","E22":"=D22*12","E23":"=D23*12","D5":"=SUM(D6:D25)","E5":"=SUM(E6:E25)","M11":"Retirement Year","P11":2029,"M12":"Retirement Age 1","P12":58,"M13":"Retirement Age 2","P13":56,"M14":"Max Age","P14":80},"dc":{"A1":"Life Events","B1":"Year","C1":"Age 1","D1":"Expense","E1":"Travel","F1":"Health","G1":"Expense 1","H1":"Expense 2","I1":"Total Expenses","J1":"Gain","K1":"SSN","L1":"Draw","M1":"Balance","O1":"Savings","A2":"1 yr before retire","B2":"=Expenses!P11-1","C2":"=Expenses!P12-1","J2":"=Expenses!P10","M2":"=Expenses!P4","A3":"ACA health Insurance starts","B3":"=B2+1","C3":"=C2+1","D3":"=IF(MAX(C3,N3)<Expenses!G17,Expenses!C5,Expenses!E5)","E3":50000,"F3":24000,"G3":0,"H3":0,"I3":"=SUM(D3:H3)","J3":"=MAX(0,M2-I3)*J$2","K3":0,"L3":"=MIN(MAX(0,I3-J3-K3),M2)","M3":"=M2-L3+O3","O3":"=MAX(0,J3+K3-I3)","B4":"=B3+1","C4":"=C3+1","D4":"=IF(MAX(C4,N4)<Expenses!G17,Expenses!C5,Expenses!E5)","E4":50000,"F4":24000,"G4":0,"H4":0,"I4":"=SUM(D4:H4)","J4":"=MAX(0,M3-I4)*J$2","K4":0,"L4":"=MIN(MAX(0,I4-J4-K4),M3)","M4":"=M3-L4+O4","O4":"=MAX(0,J4+K4-I4)","A5":"Kid gift","B5":"=B4+1","C5":"=C4+1","D5":"=IF(MAX(C5,N5)<Expenses!G17,Expenses!C5,Expenses!E5)","E5":50000,"F5":24000,"G5":50000,"H5":0,"I5":"=SUM(D5:H5)","J5":"=MAX(0,M4-I5)*J$2","K5":0,"L5":"=MIN(MAX(0,I5-J5-K5),M4)","M5":"=M4-L5+O5","O5":"=MAX(0,J5+K5-I5)","B6":"=B5+1","C6":"=C5+1","D6":"=IF(MAX(C6,N6)<Expenses!G17,Expenses!C5,Expenses!E5)","E6":50000,"F6":24000,"G6":0,"H6":0,"I6":"=SUM(D6:H6)","J6":"=MAX(0,M5-I6)*J$2","K6":0,"L6":"=MIN(MAX(0,I6-J6-K6),M5)","M6":"=M5-L6+O6","O6":"=MAX(0,J6+K6-I6)","B7":"=B6+1","C7":"=C6+1","D7":"=IF(MAX(C7,N7)<Expenses!G17,Expenses!C5,Expenses!E5)","E7":50000,"F7":24000,"G7":0,"H7":0,"I7":"=SUM(D7:H7)","J7":"=MAX(0,M6-I7)*J$2","K7":25000,"L7":"=MIN(MAX(0,I7-J7-K7),M6)","M7":"=M6-L7+O7","O7":"=MAX(0,J7+K7-I7)","A8":"Kid gift","B8":"=B7+1","C8":"=C7+1","D8":"=IF(MAX(C8,N8)<Expenses!G17,Expenses!C5,Expenses!E5)","E8":50000,"F8":24000,"G8":50000,"H8":0,"I8":"=SUM(D8:H8)","J8":"=MAX(0,M7-I8)*J$2","K8":"=K7","L8":"=MIN(MAX(0,I8-J8-K8),M7)","M8":"=M7-L8+O8","O8":"=MAX(0,J8+K8-I8)","B9":"=B8+1","C9":"=C8+1","D9":"=IF(MAX(C9,N9)<Expenses!G17,Expenses!C5,Expenses!E5)","E9":50000,"F9":24000,"G9":0,"H9":0,"I9":"=SUM(D9:H9)","J9":"=MAX(0,M8-I9)*J$2","K9":50000,"L9":"=MIN(MAX(0,I9-J9-K9),M8)","M9":"=M8-L9+O9","O9":"=MAX(0,J9+K9-I9)","B10":"=B9+1","C10":"=C9+1","D10":"=IF(MAX(C10,N10)<Expenses!G17,Expenses!C5,Expenses!E5)","E10":30000,"F10":12000,"G10":0,"H10":0,"I10":"=SUM(D10:H10)","J10":"=MAX(0,M9-I10)*J$2","K10":"=K9","L10":"=MIN(MAX(0,I10-J10-K10),M9)","M10":"=M9-L10+O10","O10":"=MAX(0,J10+K10-I10)","A11":"Kid gift","B11":"=B10+1","C11":"=C10+1","D11":"=IF(MAX(C11,N11)<Expenses!G17,Expenses!C5,Expenses!E5)","E11":30000,"F11":12000,"G11":50000,"H11":0,"I11":"=SUM(D11:H11)","J11":"=MAX(0,M10-I11)*J$2","K11":"=K10","L11":"=MIN(MAX(0,I11-J11-K11),M10)","M11":"=M10-L11+O11","O11":"=MAX(0,J11+K11-I11)","B12":"=B11+1","C12":"=C11+1","D12":"=IF(MAX(C12,N12)<Expenses!G17,Expenses!C5,Expenses!E5)","E12":30000,"F12":6000,"G12":0,"H12":0,"I12":"=SUM(D12:H12)","J12":"=MAX(0,M11-I12)*J$2","K12":"=K11","L12":"=MIN(MAX(0,I12-J12-K12),M11)","M12":"=M11-L12+O12","O12":"=MAX(0,J12+K12-I12)","B13":"=B12+1","C13":"=C12+1","D13":"=IF(MAX(C13,N13)<Expenses!G17,Expenses!C5,Expenses!E5)","E13":30000,"F13":6000,"G13":0,"H13":0,"I13":"=SUM(D13:H13)","J13":"=MAX(0,M12-I13)*J$2","K13":"=K12","L13":"=MIN(MAX(0,I13-J13-K13),M12)","M13":"=M12-L13+O13","O13":"=MAX(0,J13+K13-I13)","A14":"Kid gift","B14":"=B13+1","C14":"=C13+1","D14":"=IF(MAX(C14,N14)<Expenses!G17,Expenses!C5,Expenses!E5)","E14":30000,"F14":6000,"G14":50000,"H14":0,"I14":"=SUM(D14:H14)","J14":"=MAX(0,M13-I14)*J$2","K14":"=K13","L14":"=MIN(MAX(0,I14-J14-K14),M13)","M14":"=M13-L14+O14","O14":"=MAX(0,J14+K14-I14)","B15":"=B14+1","C15":"=C14+1","D15":"=IF(MAX(C15,N15)<Expenses!G17,Expenses!C5,Expenses!E5)","E15":30000,"F15":6000,"G15":0,"H15":0,"I15":"=SUM(D15:H15)","J15":"=MAX(0,M14-I15)*J$2","K15":"=K14","L15":"=MIN(MAX(0,I15-J15-K15),M14)","M15":"=M14-L15+O15","O15":"=MAX(0,J15+K15-I15)","B16":"=B15+1","C16":"=C15+1","D16":"=IF(MAX(C16,N16)<Expenses!G17,Expenses!C5,Expenses!E5)","E16":30000,"F16":6000,"G16":0,"H16":0,"I16":"=SUM(D16:H16)","J16":"=MAX(0,M15-I16)*J$2","K16":"=K15","L16":"=MIN(MAX(0,I16-J16-K16),M15)","M16":"=M15-L16+O16","O16":"=MAX(0,J16+K16-I16)","B17":"=B16+1","C17":"=C16+1","D17":"=IF(MAX(C17,N17)<Expenses!G17,Expenses!C5,Expenses!E5)","E17":30000,"F17":6000,"G17":0,"H17":0,"I17":"=SUM(D17:H17)","J17":"=MAX(0,M16-I17)*J$2","K17":"=K16","L17":"=MIN(MAX(0,I17-J17-K17),M16)","M17":"=M16-L17+O17","O17":"=MAX(0,J17+K17-I17)","B18":"=B17+1","C18":"=C17+1","D18":"=IF(MAX(C18,N18)<Expenses!G17,Expenses!C5,Expenses!E5)","E18":30000,"F18":6000,"G18":0,"H18":0,"I18":"=SUM(D18:H18)","J18":"=MAX(0,M17-I18)*J$2","K18":"=K17","L18":"=MIN(MAX(0,I18-J18-K18),M17)","M18":"=M17-L18+O18","O18":"=MAX(0,J18+K18-I18)","B19":"=B18+1","C19":"=C18+1","D19":"=IF(MAX(C19,N19)<Expenses!G17,Expenses!C5,Expenses!E5)","E19":30000,"F19":6000,"G19":0,"H19":0,"I19":"=SUM(D19:H19)","J19":"=MAX(0,M18-I19)*J$2","K19":"=K18","L19":"=MIN(MAX(0,I19-J19-K19),M18)","M19":"=M18-L19+O19","O19":"=MAX(0,J19+K19-I19)","B20":"=B19+1","C20":"=C19+1","D20":"=IF(MAX(C20,N20)<Expenses!G17,Expenses!C5,Expenses!E5)","E20":20000,"F20":6000,"G20":0,"H20":0,"I20":"=SUM(D20:H20)","J20":"=MAX(0,M19-I20)*J$2","K20":"=K19","L20":"=MIN(MAX(0,I20-J20-K20),M19)","M20":"=M19-L20+O20","O20":"=MAX(0,J20+K20-I20)","B21":"=B20+1","C21":"=C20+1","D21":"=IF(MAX(C21,N21)<Expenses!G17,Expenses!C5,Expenses!E5)","E21":20000,"F21":6000,"G21":0,"H21":0,"I21":"=SUM(D21:H21)","J21":"=MAX(0,M20-I21)*J$2","K21":"=K20","L21":"=MIN(MAX(0,I21-J21-K21),M20)","M21":"=M20-L21+O21","O21":"=MAX(0,J21+K21-I21)","B22":"=B21+1","C22":"=C21+1","D22":"=IF(MAX(C22,N22)<Expenses!G17,Expenses!C5,Expenses!E5)","E22":20000,"F22":6000,"G22":0,"H22":0,"I22":"=SUM(D22:H22)","J22":"=MAX(0,M21-I22)*J$2","K22":"=K21","L22":"=MIN(MAX(0,I22-J22-K22),M21)","M22":"=M21-L22+O22","O22":"=MAX(0,J22+K22-I22)","B23":"=B22+1","C23":"=C22+1","D23":"=IF(MAX(C23,N23)<Expenses!G17,Expenses!C5,Expenses!E5)","E23":20000,"F23":6000,"G23":0,"H23":0,"I23":"=SUM(D23:H23)","J23":"=MAX(0,M22-I23)*J$2","K23":"=K22","L23":"=MIN(MAX(0,I23-J23-K23),M22)","M23":"=M22-L23+O23","O23":"=MAX(0,J23+K23-I23)","B24":"=B23+1","C24":"=C23+1","D24":"=IF(MAX(C24,N24)<Expenses!G17,Expenses!C5,Expenses!E5)","E24":20000,"F24":6000,"G24":0,"H24":0,"I24":"=SUM(D24:H24)","J24":"=MAX(0,M23-I24)*J$2","K24":"=K23","L24":"=MIN(MAX(0,I24-J24-K24),M23)","M24":"=M23-L24+O24","O24":"=MAX(0,J24+K24-I24)","B25":"=B24+1","C25":"=C24+1","D25":"=IF(MAX(C25,N25)<Expenses!G17,Expenses!C5,Expenses!E5)","E25":20000,"F25":6000,"G25":0,"H25":0,"I25":"=SUM(D25:H25)","J25":"=MAX(0,M24-I25)*J$2","K25":"=K24","L25":"=MIN(MAX(0,I25-J25-K25),M24)","M25":"=M24-L25+O25","O25":"=MAX(0,J25+K25-I25)","N1":"Age 2","N2":"=Expenses!P13-1","N3":"=N2+1","N4":"=N3+1","N5":"=N4+1","N6":"=N5+1","N7":"=N6+1","N8":"=N7+1","N9":"=N8+1","N10":"=N9+1","N11":"=N10+1","N12":"=N11+1","N13":"=N12+1","N14":"=N13+1","N15":"=N14+1","N16":"=N15+1","N17":"=N16+1","N18":"=N17+1","N19":"=N18+1","N20":"=N19+1","N21":"=N20+1","N22":"=N21+1","N23":"=N22+1","N24":"=N23+1","N25":"=N24+1"}},DEF={"exp":{"A3":"Fixed Yearly Retirement Expenses","F3":"Before Medicare <65yrs","I3":"After Medicare at 65yrs","B4":"Monthly","C4":"Yearly","M4":"Starting Assets","P4":1000000,"A5":"Total","B5":"=SUM(B6:B25)","C5":"=SUM(C6:C25)","F5":"Fixed Yearly Retirement Expenses","G5":"=C5","I5":"Fixed Yearly Retirement Expenses","J5":"=E5","M5":"Total Expense in Retirement","P5":"=(G14*G18)+(J14*J18)","A6":"Car gas","B6":100,"C6":"=B6*12","F6":"Health Insurance","G6":"=AVGPRE(F3)","I6":"Health Insurance","J6":"=AVGPOST(F3)","A7":"Groceries","B7":500,"C7":"=B7*12","F7":"Travel","G7":"=AVGPRE(E3)","I7":"Travel","J7":"=AVGPOST(E3)","M7":"Ending Assets","P7":"=MAX(0,P4-P5)","A8":"Restaurants","B8":500,"C8":"=B8*12","F8":"Expense 1 (avg per year)","G8":"=AVGPRE(G3)","I8":"Expense 1 (avg per year)","J8":"=AVGPOST(G3)","F9":"Expense 2 (Avg per Year)","G9":"=AVGPRE(H3)","I9":"Expense 2 (Avg per Year)","J9":"=AVGPOST(H3)","A10":"Electricity","B10":100,"C10":"=B10*12","A11":"Gas Heating","B11":100,"C11":"=B11*12","F11":"Total Yearly Expense","G11":"=SUM(G5:G10)","I11":"Total Yearly Expense","J11":"=SUM(J5:J10)","A12":"water / sewer","B12":100,"C12":"=B12*12","F12":"Portfolio Gain (Avg per Year)","G12":"=CEIL(AVGPRE(J3),5000)","I12":"Portfolio Gain (Avg per Year)","J12":"=CEIL(AVGPOST(J3),5000)","A13":"Cell phone","B13":100,"C13":"=B13*12","F13":"SSN (Avg per Year)","G13":"=AVGPRE(K3)","I13":"SSN (Avg per Year)","J13":"=AVGPOST(K3)","A14":"Internet","B14":100,"C14":"=B14*12","F14":"Need from Portfolio (Avg per Year)","G14":"=AVGPRE(L3)","I14":"Need from Portfolio (Avg per Year)","J14":"=AVGPOST(L3)","I15":"Total savings to Portfolio (Avg per Year)","J15":"=AVGPOST(O3)","A16":"Repair (car,home)","B16":100,"C16":"=B16*12","F16":"Retirement Age","G16":"=MAX(P12,P13)","I16":"Age","J16":"=MAX(G17,G16)","A17":"Insu Car","B17":150,"C17":"=B17*12","F17":"Medicare Age","G17":65,"I17":"Maximum Age","J17":"=P14","A18":"Insu Home","B18":150,"C18":"=B18*12","F18":"Total Years","G18":"=MAX(0,MIN(G17,J17+1)-G16)","I18":"Total Years","J18":"=MAX(0,J17-J16+1)","A19":"Property Tax","B19":1000,"C19":"=B19*12","A20":"Income Tax","B20":1000,"C20":"=B20*12","A22":"General Expense 1","C22":"=B22*12","A23":"General Expense 2","C23":"=B23*12","F24":"Total funding from Portfolio","G24":"=ABS(G14*G18)","I24":"Total funding from Portfolio","J24":"=ABS(J14*J18)","A25":"Buffer","B25":500,"C25":"=B25*12","M10":"Portfolio gain","P10":0.05,"D6":50,"E6":"=D6*12","D7":250,"E7":"=D7*12","D8":250,"E8":"=D8*12","D10":100,"E10":"=D10*12","D11":100,"E11":"=D11*12","D12":100,"E12":"=D12*12","D13":100,"E13":"=D13*12","D14":100,"E14":"=D14*12","D16":100,"E16":"=D16*12","D17":100,"E17":"=D17*12","D18":200,"E18":"=D18*12","D19":1200,"E19":"=D19*12","D20":500,"E20":"=D20*12","D25":0,"E25":"=D25*12","E22":"=D22*12","E23":"=D23*12","D5":"=SUM(D6:D25)","E5":"=SUM(E6:E25)","M11":"Retirement Year","P11":2029,"M12":"Retirement Age 1","P12":58,"M13":"Retirement Age 2","P13":56,"M14":"Max Age","P14":80},"dc":{"A1":"Life Events","B1":"Year","C1":"Age 1","D1":"Expense","E1":"Travel","F1":"Health","G1":"Expense 1","H1":"Expense 2","I1":"Total Expenses","J1":"Gain","K1":"SSN","L1":"Draw","M1":"Balance","O1":"Savings","A2":"1 yr before retire","B2":"=Expenses!P11-1","C2":"=Expenses!P12-1","J2":"=Expenses!P10","M2":"=Expenses!P4","A3":"ACA health Insurance starts","B3":"=B2+1","C3":"=C2+1","D3":"=IF(MAX(C3,N3)<Expenses!G17,Expenses!C5,Expenses!E5)","E3":30000,"F3":24000,"G3":0,"H3":0,"I3":"=SUM(D3:H3)","J3":"=MAX(0,M2-I3)*J$2","K3":0,"L3":"=MIN(MAX(0,I3-J3-K3),M2)","M3":"=M2-L3+O3","O3":"=MAX(0,J3+K3-I3)","B4":"=B3+1","C4":"=C3+1","D4":"=IF(MAX(C4,N4)<Expenses!G17,Expenses!C5,Expenses!E5)","E4":30000,"F4":24000,"G4":0,"H4":0,"I4":"=SUM(D4:H4)","J4":"=MAX(0,M3-I4)*J$2","K4":0,"L4":"=MIN(MAX(0,I4-J4-K4),M3)","M4":"=M3-L4+O4","O4":"=MAX(0,J4+K4-I4)","A5":"Kid gift","B5":"=B4+1","C5":"=C4+1","D5":"=IF(MAX(C5,N5)<Expenses!G17,Expenses!C5,Expenses!E5)","E5":30000,"F5":24000,"G5":50000,"H5":0,"I5":"=SUM(D5:H5)","J5":"=MAX(0,M4-I5)*J$2","K5":0,"L5":"=MIN(MAX(0,I5-J5-K5),M4)","M5":"=M4-L5+O5","O5":"=MAX(0,J5+K5-I5)","B6":"=B5+1","C6":"=C5+1","D6":"=IF(MAX(C6,N6)<Expenses!G17,Expenses!C5,Expenses!E5)","E6":30000,"F6":24000,"G6":0,"H6":0,"I6":"=SUM(D6:H6)","J6":"=MAX(0,M5-I6)*J$2","K6":0,"L6":"=MIN(MAX(0,I6-J6-K6),M5)","M6":"=M5-L6+O6","O6":"=MAX(0,J6+K6-I6)","B7":"=B6+1","C7":"=C6+1","D7":"=IF(MAX(C7,N7)<Expenses!G17,Expenses!C5,Expenses!E5)","E7":30000,"F7":24000,"G7":0,"H7":0,"I7":"=SUM(D7:H7)","J7":"=MAX(0,M6-I7)*J$2","K7":25000,"L7":"=MIN(MAX(0,I7-J7-K7),M6)","M7":"=M6-L7+O7","O7":"=MAX(0,J7+K7-I7)","A8":"Kid gift","B8":"=B7+1","C8":"=C7+1","D8":"=IF(MAX(C8,N8)<Expenses!G17,Expenses!C5,Expenses!E5)","E8":30000,"F8":24000,"G8":50000,"H8":0,"I8":"=SUM(D8:H8)","J8":"=MAX(0,M7-I8)*J$2","K8":"=K7","L8":"=MIN(MAX(0,I8-J8-K8),M7)","M8":"=M7-L8+O8","O8":"=MAX(0,J8+K8-I8)","B9":"=B8+1","C9":"=C8+1","D9":"=IF(MAX(C9,N9)<Expenses!G17,Expenses!C5,Expenses!E5)","E9":30000,"F9":24000,"G9":0,"H9":0,"I9":"=SUM(D9:H9)","J9":"=MAX(0,M8-I9)*J$2","K9":35000,"L9":"=MIN(MAX(0,I9-J9-K9),M8)","M9":"=M8-L9+O9","O9":"=MAX(0,J9+K9-I9)","B10":"=B9+1","C10":"=C9+1","D10":"=IF(MAX(C10,N10)<Expenses!G17,Expenses!C5,Expenses!E5)","E10":30000,"F10":12000,"G10":0,"H10":0,"I10":"=SUM(D10:H10)","J10":"=MAX(0,M9-I10)*J$2","K10":35000,"L10":"=MIN(MAX(0,I10-J10-K10),M9)","M10":"=M9-L10+O10","O10":"=MAX(0,J10+K10-I10)","A11":"Kid gift","B11":"=B10+1","C11":"=C10+1","D11":"=IF(MAX(C11,N11)<Expenses!G17,Expenses!C5,Expenses!E5)","E11":15000,"F11":12000,"G11":0,"H11":0,"I11":"=SUM(D11:H11)","J11":"=MAX(0,M10-I11)*J$2","K11":35000,"L11":"=MIN(MAX(0,I11-J11-K11),M10)","M11":"=M10-L11+O11","O11":"=MAX(0,J11+K11-I11)","B12":"=B11+1","C12":"=C11+1","D12":"=IF(MAX(C12,N12)<Expenses!G17,Expenses!C5,Expenses!E5)","E12":15000,"F12":6000,"G12":0,"H12":0,"I12":"=SUM(D12:H12)","J12":"=MAX(0,M11-I12)*J$2","K12":35000,"L12":"=MIN(MAX(0,I12-J12-K12),M11)","M12":"=M11-L12+O12","O12":"=MAX(0,J12+K12-I12)","B13":"=B12+1","C13":"=C12+1","D13":"=IF(MAX(C13,N13)<Expenses!G17,Expenses!C5,Expenses!E5)","E13":15000,"F13":6000,"G13":0,"H13":0,"I13":"=SUM(D13:H13)","J13":"=MAX(0,M12-I13)*J$2","K13":35000,"L13":"=MIN(MAX(0,I13-J13-K13),M12)","M13":"=M12-L13+O13","O13":"=MAX(0,J13+K13-I13)","A14":"Kid gift","B14":"=B13+1","C14":"=C13+1","D14":"=IF(MAX(C14,N14)<Expenses!G17,Expenses!C5,Expenses!E5)","E14":15000,"F14":6000,"G14":50000,"H14":0,"I14":"=SUM(D14:H14)","J14":"=MAX(0,M13-I14)*J$2","K14":35000,"L14":"=MIN(MAX(0,I14-J14-K14),M13)","M14":"=M13-L14+O14","O14":"=MAX(0,J14+K14-I14)","B15":"=B14+1","C15":"=C14+1","D15":"=IF(MAX(C15,N15)<Expenses!G17,Expenses!C5,Expenses!E5)","E15":15000,"F15":6000,"G15":0,"H15":0,"I15":"=SUM(D15:H15)","J15":"=MAX(0,M14-I15)*J$2","K15":35000,"L15":"=MIN(MAX(0,I15-J15-K15),M14)","M15":"=M14-L15+O15","O15":"=MAX(0,J15+K15-I15)","B16":"=B15+1","C16":"=C15+1","D16":"=IF(MAX(C16,N16)<Expenses!G17,Expenses!C5,Expenses!E5)","E16":15000,"F16":6000,"G16":0,"H16":0,"I16":"=SUM(D16:H16)","J16":"=MAX(0,M15-I16)*J$2","K16":35000,"L16":"=MIN(MAX(0,I16-J16-K16),M15)","M16":"=M15-L16+O16","O16":"=MAX(0,J16+K16-I16)","B17":"=B16+1","C17":"=C16+1","D17":"=IF(MAX(C17,N17)<Expenses!G17,Expenses!C5,Expenses!E5)","E17":15000,"F17":6000,"G17":0,"H17":0,"I17":"=SUM(D17:H17)","J17":"=MAX(0,M16-I17)*J$2","K17":35000,"L17":"=MIN(MAX(0,I17-J17-K17),M16)","M17":"=M16-L17+O17","O17":"=MAX(0,J17+K17-I17)","B18":"=B17+1","C18":"=C17+1","D18":"=IF(MAX(C18,N18)<Expenses!G17,Expenses!C5,Expenses!E5)","E18":15000,"F18":6000,"G18":0,"H18":0,"I18":"=SUM(D18:H18)","J18":"=MAX(0,M17-I18)*J$2","K18":35000,"L18":"=MIN(MAX(0,I18-J18-K18),M17)","M18":"=M17-L18+O18","O18":"=MAX(0,J18+K18-I18)","B19":"=B18+1","C19":"=C18+1","D19":"=IF(MAX(C19,N19)<Expenses!G17,Expenses!C5,Expenses!E5)","E19":15000,"F19":6000,"G19":0,"H19":0,"I19":"=SUM(D19:H19)","J19":"=MAX(0,M18-I19)*J$2","K19":35000,"L19":"=MIN(MAX(0,I19-J19-K19),M18)","M19":"=M18-L19+O19","O19":"=MAX(0,J19+K19-I19)","B20":"=B19+1","C20":"=C19+1","D20":"=IF(MAX(C20,N20)<Expenses!G17,Expenses!C5,Expenses!E5)","E20":5000,"F20":6000,"G20":0,"H20":0,"I20":"=SUM(D20:H20)","J20":"=MAX(0,M19-I20)*J$2","K20":35000,"L20":"=MIN(MAX(0,I20-J20-K20),M19)","M20":"=M19-L20+O20","O20":"=MAX(0,J20+K20-I20)","B21":"=B20+1","C21":"=C20+1","D21":"=IF(MAX(C21,N21)<Expenses!G17,Expenses!C5,Expenses!E5)","E21":5000,"F21":6000,"G21":0,"H21":0,"I21":"=SUM(D21:H21)","J21":"=MAX(0,M20-I21)*J$2","K21":35000,"L21":"=MIN(MAX(0,I21-J21-K21),M20)","M21":"=M20-L21+O21","O21":"=MAX(0,J21+K21-I21)","B22":"=B21+1","C22":"=C21+1","D22":"=IF(MAX(C22,N22)<Expenses!G17,Expenses!C5,Expenses!E5)","E22":5000,"F22":6000,"G22":0,"H22":0,"I22":"=SUM(D22:H22)","J22":"=MAX(0,M21-I22)*J$2","K22":35000,"L22":"=MIN(MAX(0,I22-J22-K22),M21)","M22":"=M21-L22+O22","O22":"=MAX(0,J22+K22-I22)","B23":"=B22+1","C23":"=C22+1","D23":"=IF(MAX(C23,N23)<Expenses!G17,Expenses!C5,Expenses!E5)","E23":5000,"F23":6000,"G23":0,"H23":0,"I23":"=SUM(D23:H23)","J23":"=MAX(0,M22-I23)*J$2","K23":35000,"L23":"=MIN(MAX(0,I23-J23-K23),M22)","M23":"=M22-L23+O23","O23":"=MAX(0,J23+K23-I23)","B24":"=B23+1","C24":"=C23+1","D24":"=IF(MAX(C24,N24)<Expenses!G17,Expenses!C5,Expenses!E5)","E24":5000,"F24":6000,"G24":0,"H24":0,"I24":"=SUM(D24:H24)","J24":"=MAX(0,M23-I24)*J$2","K24":35000,"L24":"=MIN(MAX(0,I24-J24-K24),M23)","M24":"=M23-L24+O24","O24":"=MAX(0,J24+K24-I24)","B25":"=B24+1","C25":"=C24+1","D25":"=IF(MAX(C25,N25)<Expenses!G17,Expenses!C5,Expenses!E5)","E25":5000,"F25":6000,"G25":0,"H25":0,"I25":"=SUM(D25:H25)","J25":"=MAX(0,M24-I25)*J$2","K25":35000,"L25":"=MIN(MAX(0,I25-J25-K25),M24)","M25":"=M24-L25+O25","O25":"=MAX(0,J25+K25-I25)","N1":"Age 2","N2":"=Expenses!P13-1","N3":"=N2+1","N4":"=N3+1","N5":"=N4+1","N6":"=N5+1","N7":"=N6+1","N8":"=N7+1","N9":"=N8+1","N10":"=N9+1","N11":"=N10+1","N12":"=N11+1","N13":"=N12+1","N14":"=N13+1","N15":"=N14+1","N16":"=N15+1","N17":"=N16+1","N18":"=N17+1","N19":"=N18+1","N20":"=N19+1","N21":"=N20+1","N22":"=N21+1","N23":"=N22+1","N24":"=N23+1","N25":"=N24+1"}};
function clone(o){return JSON.parse(JSON.stringify(o))}
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;')}
function bad(m){throw new Error(m||'#ERR')}
function warn(w,e){console.warn('report_spend '+w+': '+(e&&e.message))}
function usd(v){return (v<0?'-$':'$')+Math.abs(v).toLocaleString('en-US',{maximumFractionDigits:0})}
function pct(v){return trim((v*100).toFixed(4))+'%'}
function sum(a){return a.reduce(function(x,y){return x+y},0)}
var FIRST='ABCNJM';
var S=clone(DEF),memo={},stack={},hist=[],before=null,NOBL=0;
var ALIAS={EXPENSES:'exp',DC:'dc'};
var EVT=[['Soc Sec 1 starts','o',62],['Soc Sec 2 people starts','y',62],['Medicare 1, Low Travel','o',65],['Medicare 2 people starts','y',65],['Low travel','o',75]];
var MAXROW=60,GEN={D:'=IF(MAX(C#,N#)<Expenses!G17,Expenses!C5,Expenses!E5)',I:'=SUM(D#:H#)',J:'=MAX(0,M@-I#)*J$2',K:'=K@',L:'=MIN(MAX(0,I#-J#-K#),M@)',M:'=M@-L#+O#',O:'=MAX(0,J#+K#-I#)'};
function genRaw(sh,r){
var m=/^([A-Z]+)(\d+)$/.exec(r),row=+m[2],c=m[1],p=row-1;
if(sh!=='dc'||row<=25||row>MAXROW)return undefined;
if(c==='B'||c==='C'||c==='N')return '='+c+p+'+1';
if(c==='E'||c==='F')return rawOf('dc',c+p);
if(c==='G'||c==='H')return 0;
return GEN[c]?GEN[c].replace(/#/g,row).replace(/@/g,p):''}
function rawOf(sh,r){var v=S[sh][r];return v!==undefined?v:genRaw(sh,r)}
function lastRow(){
var a=cellVal('exp','P12'),b=cellVal('exp','P13'),mx=cellVal('exp','P14');
if(typeof a!=='number'||typeof b!=='number'||typeof mx!=='number')return 25;
return Math.max(3,Math.min(MAXROW,3+Math.round(mx-Math.max(a,b))))}
function needAt(r){
var q=['I','J','K'].map(function(c){var x=cellVal('dc',c+r);if(x instanceof Err)bad(x.m);return x});
return typeof q[0]!=='number'?'':Math.max(0,q[0]-(typeof q[1]==='number'?q[1]:0)-(typeof q[2]==='number'?q[2]:0))}
function tblStat(f,col){
var med=cellVal('exp','G17'),last=lastRow(),s=0,n=0,mx=0,o=NOBL;if(typeof med!=='number')bad();
NOBL=1;
try{for(var r=3;r<=last;r++){
var a=cellVal('dc','C'+r),b=cellVal('dc','N'+r),v=col==='L'&&isF('dc','L'+r)?needAt(r):cellVal('dc',col+r);
if(v instanceof Err)bad(v.m);if(typeof v!=='number'||typeof a!=='number'||typeof b!=='number')continue;
var old=Math.max(a,b);if(f==='MAXCOL'){mx=Math.max(mx,v);continue}
if(f==='AVGPRE'?old<med:old>=med){s+=v;n++}}}
finally{NOBL=o}
return f==='MAXCOL'?mx:(n?s/n:0)}function rup(v){var a=Math.abs(v),st=a<=10000?1000:a<=100000?5000:10000;return (v<0?-1:1)*Math.ceil(a/st-1e-9)*st}
function Err(m){this.m=m}
function colN(s){var n=0;for(var i=0;i<s.length;i++)n=n*26+s.charCodeAt(i)-64;return n}
function colS(n){var s='';while(n>0){var m=(n-1)%26;s=String.fromCharCode(65+m)+s;n=Math.floor((n-1)/26)}return s}
function cellVal(sh,r){
var k=(NOBL?'~':'')+sh+'!'+r;if(k in memo)return memo[k];
if(stack[k])throw new Error('#CYCLE');
var raw=rawOf(sh,r),v;
if(sh==='dc'&&!NOBL&&afterDep(+r.replace(/^[A-Z]+/,'')))v='';
else if(raw==null||raw==='')v='';
else if(typeof raw==='number')v=raw;
else if(raw.charAt(0)==='='){stack[k]=1;try{v=evalF(sh,raw.slice(1))}catch(e){v=new Err(e&&e.message&&e.message.charAt(0)==='#'?e.message:'#ERR')}finally{delete stack[k]}}
else v=raw;
memo[k]=v;return v}
function depRow(upto){
for(var q=3;q<=upto;q++){var m=cellVal('dc','M'+q);if(typeof m==='number'&&m===0)return q}
return 0}
function afterDep(row){return row>=4&&depRow(row-1)>0}
var blankRow=afterDep;
function num(v){if(v instanceof Err)bad(v.m);return typeof v==='number'?v:0}
function evalF(sh,src){
src=src.replace(/\$/g,'');
var re=/\s*(?:(\d+\.?\d*|\.\d+)|((?:[A-Za-z]+!)?[A-Za-z]+\d+(?::[A-Za-z]+\d+)?)|([A-Za-z]+)\s*\(|([-+*\/%^(),<>=])|(\S))/g,tk=[],m;
while((m=re.exec(src))){if(m[5])bad();tk.push(m[1]!=null?{n:+m[1]}:m[2]?{r:m[2].toUpperCase()}:m[3]?{f:m[3].toUpperCase()}:{o:m[4]})}
var i=0;
function peek(o){return tk[i]&&tk[i].o===o}
function eat(o){if(!peek(o))bad();i++}
function range(r){var s2=sh,pp=r.split('!');if(pp.length>1){s2=ALIAS[pp[0]];r=pp[1];if(!s2)bad('#NAME')}
var p=r.split(':');if(p.length===1)return [cellVal(s2,p[0])];
var a=/^([A-Z]+)(\d+)$/.exec(p[0]),b=/^([A-Z]+)(\d+)$/.exec(p[1]),o=[];
for(var c=Math.min(colN(a[1]),colN(b[1]));c<=Math.max(colN(a[1]),colN(b[1]));c++)for(var y=Math.min(+a[2],+b[2]);y<=Math.max(+a[2],+b[2]);y++)o.push(cellVal(s2,colS(c)+y));return o}
function cmp(){var v=expr(),o=tk[i]&&tk[i].o;if(o!=='<'&&o!=='>'&&o!=='=')return v!==0;i++;var e=peek('=');if(e&&o!=='=')i++;var g=peek('>');if(o==='<'&&g){i++;return v!==expr()}var w=expr();
return o==='<'?(e?v<=w:v<w):o==='>'?(e?v>=w:v>w):v===w}
function expr(){var v=term();while(peek('+')||peek('-')){var o=tk[i++].o,w=term();v=o==='+'?v+w:v-w}return v}
function term(){var v=unary();while(peek('*')||peek('/')){var o=tk[i++].o,w=unary();if(o==='/'&&w===0)bad('#DIV/0');v=o==='*'?v*w:v/w}return v}
function unary(){if(peek('-')){i++;return -unary()}if(peek('+')){i++;return unary()}return pw()}
function pw(){var v=post();if(peek('^')){i++;v=Math.pow(v,unary())}return v}
function post(){var v=atom();while(peek('%')){i++;v=v/100}return v}
function atom(){
var t=tk[i];if(!t)bad();
if(t.n!=null){i++;return t.n}
if(t.r){i++;var a=range(t.r);if(a.length!==1)bad();return num(a[0])}
if(t.f==='IF'){i++;var c=cmp();eat(',');var x1=expr();eat(',');var x2=expr();eat(')');return c?x1:x2}
if(t.f==='AVGPRE'||t.f==='AVGPOST'||t.f==='MAXCOL'){i++;var u0=tk[i];if(!u0||!u0.r)bad();i++;eat(')');return tblStat(t.f,u0.r.replace(/\d+$/,''))}
if(t.f){i++;var vals=[];
if(!peek(')'))for(;;){var u=tk[i];
if(u&&u.r&&tk[i+1]&&(tk[i+1].o===','||tk[i+1].o===')')){i++;range(u.r).forEach(function(x){if(x instanceof Err)bad(x.m);if(typeof x==='number')vals.push(x)})}else vals.push(expr());
if(peek(',')){i++;continue}break}
eat(')');
if(t.f==='SUM')return sum(vals);
if(t.f==='MIN')return vals.length?Math.min.apply(0,vals):0;
if(t.f==='MAX')return vals.length?Math.max.apply(0,vals):0;
if(t.f==='ABS')return Math.abs(vals[0]||0);
if(t.f==='CEIL')return vals[1]>0?Math.ceil(vals[0]/vals[1]-1e-9)*vals[1]:vals[0];
if(t.f==='AVERAGE')return vals.length?sum(vals)/vals.length:0;
bad('#NAME')}
if(t.o==='('){i++;var v=expr();eat(')');return v}
bad()}
var v=expr();if(i<tk.length)bad();return v}
var YR={G16:1,G17:1,G18:1,J16:1,J17:1,J18:1,P11:1,P12:1,P13:1,P14:1};
function isF(sh,r){var a=rawOf(sh,r);return typeof a==='string'&&a.charAt(0)==='='}
function kind(sh,r){
var raw=rawOf(sh,r),col=r.replace(/\d+/g,'');
if(typeof raw==='string'&&raw.charAt(0)!=='='&&raw!==''&&isNaN(Number(raw)))return 't';
if(sh==='exp'){if(YR[r])return 'y';if(r==='P10')return 'p';if(col==='A'||col==='F'||col==='I'||col==='M')return 't';return 'd'}
if(col==='A')return 't';if(col==='B'||col==='C'||col==='N')return 'y';if(r==='J2')return 'p';return 'd'}
function trim(s){return s.replace(/\.0+$/,'').replace(/(\.\d*?)0+$/,'$1')}
function disp(sh,r,k){
var v=cellVal(sh,r);
if(v instanceof Err)return v.m;
if(v===''||v==null)return '';
if(typeof v!=='number')return String(v);
if(k==='y')return String(Math.round(v*100)/100);
if(k==='p')return pct(v);
return usd(sh==='dc'||(sh==='exp'&&(r.charAt(0)==='G'||r.charAt(0)==='J'))?rup(v):v)}
function rawText(sh,r,k){
var a=rawOf(sh,r);if(a==null)return '';
if(typeof a==='number')return k==='p'?pct(a):String(a);
return a}
function parseRaw(k,t){
t=t.trim();if(t==='')return '';
if(k!=='t'){var m=/^([-+]?)\$?([-+]?)([\d,]*\.?\d*)\s*(%?)$/.exec(t);
if(m&&/\d/.test(m[3])){var x=Number(m[3].replace(/,/g,''));if(isFinite(x)){if(m[1]==='-'||m[2]==='-')x=-x;if(k==='p'||m[4])x=Number((x/100).toPrecision(12));return x}}}
return t}
function clean(k,t){
if(k==='t')return t;
var s=String(t).replace(/[^\d.]/g,'');if(k==='y')s=s.split('.')[0];else{var d=s.indexOf('.');if(d>=0)s=s.slice(0,d+1)+s.slice(d+1).replace(/\./g,'')}
return (k==='d'&&/^[\s$]*-/.test(t)?'-':'')+s+(k==='p'&&/%/.test(t)?'%':'')}
function keyBad(k,e,v,a,b){
if(k==='t'||e.ctrlKey||e.metaKey||e.altKey||String(e.key).length!==1)return false;
var t=v.slice(0,a)+v.slice(b),r=t.slice(0,a)+e.key+t.slice(a);
return r!==clean(k,r)}
function lim(k,r){return k==='y'?(r==='P11'||/^B/.test(r)?[1900,2200]:[0,120]):k==='p'?[0,1]:r==='P4'?[0,1e12]:[-1e12,1e12]}
function valid(k,r,t){
var x=parseRaw(k,clean(k,t));if(k==='t')return x;
if(typeof x!=='number')return;var l=lim(k,r);if(x<l[0]||x>l[1]||(k==='y'&&x%1))return;return x}
var BUD_ROWS=[6,7,8,10,11,12,13,14,16,17,18,19,20,22,23,25],BUD_SPC={6:3,10:3,16:3,22:3,25:3};
var EXP_ROWS_B=[5,6,7,8,9,11,0,12,13,14,0,15,0,16,17,18,24],EXP_ROWS_A=[5,6,7,8,9,11,0,12,13,14,15,0,16,17,18,24],
EXP_LBL={6:1,7:1,8:1,9:1},EXP_TOT={11:1,14:1,24:1};
var RO={G17:1};
function inp(sh,r,cls,ro){return '<input class="'+(cls||'')+'" data-s="'+sh+'" data-r="'+r+'"'+(ro||(sh==='exp'&&RO[r])||(sh==='dc'&&r.charAt(0)==='B')?' data-ro="1"':'')+' spellcheck="false" autocomplete="off">'}
function sideCard(title,lc,vc){
var h='<div class="sp-c"><h3>'+esc(title)+'</h3><table class="sp-t">';
(lc==='F'?EXP_ROWS_B:EXP_ROWS_A).forEach(function(n){
if(!n){h+='<tr class="sp-bl"><td class="sl"></td><td><input readonly tabindex="-1" spellcheck="false"></td></tr>';return}
var L=lc+n,V=vc+n;
h+='<tr'+(EXP_TOT[n]?' class="tot"':'')+'>'+(EXP_LBL[n]?'<td>'+inp('exp',L,'t',1)+'</td>':'<td class="sl">'+esc(DEF.exp[L]||'')+'</td>')+'<td>'+(V in DEF.exp||EXP_LBL[n]||RO[V]?inp('exp',V,'',1):'')+'</td></tr>'});
return h+'</table></div>'}
var TLC=['A','B','C','N','D','E','F','G','H','I','J','K','L','O','M'];
var GP='<td class="gp"></td>';
function budCells(r){return '<td>'+inp('exp','B'+r)+'</td><td>'+inp('exp','C'+r)+'</td>'+GP+'<td>'+inp('exp','D'+r)+'</td><td>'+inp('exp','E'+r)+'</td>'}
function build(){
var h='<div class="bar"><button id="spSave" class="pri">'+esc(RPT.T.save)+'</button><button id="spUp">'+esc(T.up)+'</button><input type="file" id="spFile" accept=".json,application/json" hidden><button id="spUndo">'+esc(T.undo)+'</button><button id="spReset">'+esc(T.reset)+'</button><span class="mut" id="spInfo"></span><span class="mut" id="spHint"></span></div>';
h+='<div class="sp-kpis" id="spKpis"></div><div class="sp-g">';
h+='<div class="sp-c"><h3>'+esc(T.month)+'</h3><table class="sp-t sp-b"><thead><tr><th></th><th colspan="2" class="grp">'+esc(T.before)+'</th><th class="gp"></th><th colspan="2" class="grp">'+esc(T.after)+'</th></tr><tr><th></th><th>'+esc(DEF.exp.B4)+'</th><th>'+esc(DEF.exp.C4)+'</th><th class="gp"></th><th>'+esc(DEF.exp.B4)+'</th><th>'+esc(DEF.exp.C4)+'</th></tr></thead><tbody>';
h+='<tr class="tot top"><td class="sl">'+esc(DEF.exp.A5)+'</td>'+budCells(5)+'</tr>';
BUD_ROWS.forEach(function(r){for(var sp=0;sp<(BUD_SPC[r]||0);sp++)h+='<tr class="spc"><td colspan="6"></td></tr>';h+='<tr><td>'+inp('exp','A'+r,'t')+'</td>'+budCells(r)+'</tr>'});
h+='</tbody></table></div>';
h+='<div class="sp-r"><div class="sp-pr"><div class="sp-c sp-plan"><h3>'+esc(T.plan)+'</h3><div class="sp-pg">';
[11,12,13,14,4,10].forEach(function(n){h+='<label class="pf'+(n===4?' pf-w':'')+'"><span>'+esc(DEF.exp['M'+n])+'</span>'+inp('exp','P'+n)+(n===4?'<small>'+esc(T.assetsNote)+'</small>':'')+'</label>'});
h+='</div><div class="sp-ab"><button id="spSA">'+esc(T.saveA)+'</button><button id="spCA">'+esc(T.cmpA)+'</button></div><div id="spAB"></div><div class="sp-warn" id="spWarn"></div></div>';
h+='<div class="sp-c" id="spChartC"><h3>'+esc(T.chart)+'</h3><div id="spChart"></div></div></div>'+sideCard(T.before,'F','G')+sideCard(T.after,'I','J')+'</div></div>';
h+='<div class="sp-c"><h3>'+esc(T.tl)+' <span class="sp-bw"><button id="spXlsx" class="sp-bd">'+esc(T.xlsx)+'</button><button id="spCopy" class="sp-bd">'+esc(T.copy)+'</button><span class="sp-tip" id="spTip"></span></span></h3>'+rangeBar()+'<div class="sp-tl"><table class="sp-t"><thead><tr>';
TLC.forEach(function(c){h+='<th>'+esc(DEF.dc[c+'1']||'')+'</th>'});
h+='</tr></thead><tbody>';
for(var y=2;y<=MAXROW;y++){h+='<tr data-row="'+y+'">';TLC.forEach(function(c){var show=y>2||FIRST.indexOf(c)>=0;h+='<td>'+(show?inp('dc',c+y,c==='A'?'t lt':''):'')+'</td>'});h+='</tr>'}
h+='</tbody></table></div></div>';
$('spBody').innerHTML=h;
$('spBody').querySelectorAll('input[data-s]').forEach(function(i){
var sh=i.dataset.s,r=i.dataset.r;
i.onfocus=function(){before=clone(S);if(!i.readOnly){i.value=rawText(sh,r,kind(sh,r));i.select()}};
i.onblur=function(){delete i.dataset.inv;commit();refresh()};
i.oninput=function(){var k=kind(sh,r);if(i.readOnly||i.value.trim().charAt(0)==='=')return;var c=clean(k,i.value);if(c!==i.value)i.value=c;var x=valid(k,r,c);
if(x===undefined){i.dataset.inv='1';if(before){var b=before[sh][r];if(b===undefined)delete S[sh][r];else S[sh][r]=b}}else{delete i.dataset.inv;S[sh][r]=x}persist();refresh(i)};
i.onpaste=function(e){pasteTo(i,kind(sh,r),e,i.oninput)};
i.onkeydown=function(e){if(blockKey(i,kind(sh,r),e))return;if(e.key==='Enter')i.blur();if(e.key==='Escape'){if(before)S=before;before=null;persist();i.blur()}}});
var RB=[['spRv','d'],['spRa','y'],['spRb','y']];
RB.forEach(function(q){var i=$(q[0]);i.onkeydown=function(e){blockKey(i,q[1],e)};i.onpaste=function(e){pasteTo(i,q[1],e,i.oninput)};i.oninput=function(){var c=clean(q[1],i.value);if(c!==i.value)i.value=c;i.classList.toggle('rd',c!==''&&valid(q[1],'C3',c)===undefined)}});
function unfocus(){var a=document.activeElement;if(a&&a.tagName==='INPUT')a.blur()}
$('spRg').onclick=function(){unfocus();var n=applyRange($('spRc').value,$('spRv').value,$('spRa').value,$('spRb').value);RB.forEach(function(q){$(q[0]).classList.toggle('rd',valid(q[1],'C3',$(q[0]).value)===undefined)});tip(n<0?T.rngBad:T.rngDone.replace('{0}',n),$('spRg'))};
$('spSA').onclick=function(){unfocus();saveA();cmpOn=false;sideLines();tip(T.savedA,$('spSA'))};
$('spCA').onclick=function(){unfocus();if(!planA){tip(T.noA,$('spCA'));return}cmpOn=!cmpOn;sideLines()};
$('spSave').onclick=function(){unfocus();var r=$('iSave').onclick();Promise.resolve(r).then(function(){$('spInfo').textContent=$('iInfo').textContent})};
$('spUp').onclick=function(){unfocus();$('spFile').value='';$('spFile').click()};
$('spFile').onchange=function(){var f=this.files&&this.files[0];if(!f)return;
if(f.size>1e6){tip(T.upBad,$('spUp'));return}
f.text().then(function(t){var r;try{r=uploadPlan(JSON.parse(t))}catch(e){r=null}
tip(r?T.upDone.replace('{0}',r[0]).replace('{1}',r[1]):T.upBad,$('spUp'))},function(){tip(T.upBad,$('spUp'))})};
$('spReset').onclick=function(e){unfocus();var D=e&&e.shiftKey?DEF0:DEF;if(eqS(S,D))return;hist.push(clone(S));S=clone(D);persist();refresh()};
$('spXlsx').onclick=function(){unfocus();dlXlsx()};
$('spCopy').onclick=function(){unfocus();copyTable()};
$('spHint').textContent=dlHint();$('spHint').style.whiteSpace='pre-line';if($('iHint')){$('iHint').textContent=dlHint();$('iHint').style.whiteSpace='pre-line'}
$('spUndo').onclick=$('spUndo2').onclick=function(){unfocus();if(!hist.length)return;S=hist.pop();persist();refresh()}}
function eqCells(a,b){return Object.keys(a).concat(Object.keys(b)).every(function(k){return (a[k]==null?'':a[k])===(b[k]==null?'':b[k])})}
function eqS(a,b){return eqCells(a.exp,b.exp)&&eqCells(a.dc,b.dc)}
function commit(){if(before&&!eqS(before,S)){hist.push(before);if(hist.length>200)hist.shift()}before=null}
function persist(){
var P=RPT.pay&&RPT.pay();if(!P)return;
if(eqS(S,DEF)){if('spend_plan' in P)delete P.spend_plan}else P.spend_plan=clone(S);
RPT.payEdited()}
function kpi(l,v,neg){return '<div class="sp-k'+(neg?' neg':'')+'"><span>'+esc(l)+'</span><b>'+esc(v)+'</b></div>'}
function autoLabels(){
var m={},used={},last=lastRow(),med=cellVal('exp','G17');
EVT.forEach(function(e){
var thr=e[2]===65&&typeof med==='number'?med:e[2];
for(var r=2;r<=last;r++){var a=cellVal('dc','C'+r),b=cellVal('dc','N'+r);if(typeof a!=='number'||typeof b!=='number')continue;
if((e[1]==='o'?Math.max(a,b):Math.min(a,b))>=thr){(m[r]=m[r]||[]).push(e[0]);break}}});
for(var r in m)used[r]=m[r].join(' / ');return used}
function gv(sh,r){var v=cellVal(sh,r);return typeof v==='number'?v:0}
function keyNums(){
var last=lastRow(),lo=Infinity,dep=depRow(last);for(var y=3;y<=last;y++)lo=Math.min(lo,gv('dc','M'+y));
return {last:last,lo:lo,end:gv('dc','M'+last),dep:dep,out:dep?cellVal('dc','B'+dep):'',need:gv('exp','P5')}}
function refresh(skip){
memo={};stack={};
var auto=autoLabels(),last=lastRow();
document.querySelectorAll('#spBody tr[data-row]').forEach(function(tr){tr.style.display=+tr.dataset.row>last?'none':''});
document.querySelectorAll('#spBody input[data-s]').forEach(function(i){
var sh=i.dataset.s,r=i.dataset.r,k=kind(sh,r),raw=rawOf(sh,r),f=isF(sh,r),v=cellVal(sh,r);
var ro=(f&&!(sh==='dc'&&r.charAt(0)==='K'))||!!i.dataset.ro;i.readOnly=ro;i.tabIndex=ro?-1:0;
i.className=(k==='t'?'t ':'')+(i.classList.contains('lt')?'lt ':'')+(ro?'f':(k!=='t'?'in':''))+(v instanceof Err?' e':'')+(i.dataset.inv?' rd':'');
if(sh==='dc'&&r.charAt(0)==='A'){var man=raw!=null&&raw!=='';i.placeholder=man?'':(auto[r.slice(1)]||'')}
if(i!==skip&&i!==document.activeElement)i.value=disp(sh,r,k)});
var g=gv,money=usd,n=keyNums(),lo=n.lo,end=n.end,dep=n.dep,dy=n.out;
var el=$('spKpis');if(el)el.innerHTML=(dep?'<div class="sp-k neg sp-dep"><b>'+esc(T.runsOut+' '+(typeof dy==='number'?dy:'?'))+'</b></div>':'')+kpi(T.k4,money(rup(end)),end<0)+kpi(T.k5,money(rup(lo)),lo<0)+kpi(T.k1,money(rup(g('exp','G11'))))+kpi(T.k1a,money(rup(g('exp','J11'))))+kpi(T.k2,money(n.need));
sideLines()
$('spSave').disabled=$('iSave').disabled;$('spUndo').disabled=$('spUndo2').disabled=!hist.length;$('spReset').disabled=eqS(S,DEF)&&eqS(S,DEF0)}
var planA=null,cmpOn=false;
function chartSvg(){
var n=keyNums().last;if(n<3)return '';
var W=640,H=230,L=64,R=12,Tp=22,B=26,pb=[],pe=[],mx=0,y,v,i,s,t;
for(y=2;y<=n;y++){v=cellVal('dc','M'+y);if(typeof v==='number'){mx=Math.max(mx,v);pb.push([y,v])}v=cellVal('dc','I'+y);if(y>2&&typeof v==='number'){mx=Math.max(mx,v);pe.push([y,v])}}
if(pb.length<2)return '';
var st=mx>0?rup(mx/4):1000,top=st*4,X=function(r){return (L+(W-L-R)*(r-2)/(n-2)).toFixed(1)},Y=function(q){return (Tp+(H-Tp-B)*(1-q/top)).toFixed(1)};
s='<svg class="sp-svg" viewBox="0 0 '+W+' '+H+'" role="img"><title>'+esc(T.chart)+'</title>';
for(i=0;i<=4;i++)s+='<line class="gl" x1="'+L+'" x2="'+(W-R)+'" y1="'+Y(i*st)+'" y2="'+Y(i*st)+'"/><text x="'+(L-4)+'" y="'+(+Y(i*st)+3)+'" text-anchor="end">'+usd(i*st)+'</text>';
var sx=Math.max(1,Math.ceil((n-2)/6));
for(y=2;y<=n;y+=sx){t=cellVal('dc','B'+y);s+='<text x="'+X(y)+'" y="'+(H-8)+'" text-anchor="middle">'+(typeof t==='number'?t:'')+'</text>'}
[[pb,'bl',DEF.dc.M1],[pe,'ex',DEF.dc.I1]].forEach(function(q,j){
s+='<polyline class="'+q[1]+'" points="'+q[0].map(function(p){return X(p[0])+','+Y(p[1])}).join(' ')+'"/><text class="l'+q[1]+'" x="'+(L+8+j*90)+'" y="12">'+esc(q[2])+'</text>'});
return s+'</svg>'}
function warns(){
var w=[],e=function(r){var v=cellVal('exp',r);return typeof v==='number'?v:null},a=e('P12'),b=e('P13'),mx=e('P14'),md=e('G17'),as=e('P4'),n=lastRow(),d=a!=null&&b!=null?a-b:null,bd=false,r,c,m;
if(mx!=null&&md!=null&&mx<md)w.push(T.w1);
for(r=2;r<=n&&d!=null;r++){c=cellVal('dc','C'+r);m=cellVal('dc','N'+r);if(typeof c==='number'&&typeof m==='number'&&c-m!==d)bd=true}
if(bd)w.push(T.w2);
if(as!=null&&as<=0)w.push(T.w4);
var ag=[a,b].filter(function(q){return q!=null});
if(mx!=null&&ag.length&&Math.max.apply(null,ag)>=mx)w.push(T.w5);
if(mx!=null&&ag.length&&3+Math.round(mx-Math.max.apply(null,ag))>MAXROW)w.push(T.w6);
return w}
function uploadPlan(o){
var sp=o&&typeof o==='object'?o.spend_plan:null;if(!sp||typeof sp!=='object'||(!sp.exp&&!sp.dc))return null;
var N=clone(DEF),ok=0,bad=0;
['exp','dc'].forEach(function(s){var c=sp[s];if(!c||typeof c!=='object')return;Object.keys(c).forEach(function(k){
var v=c[k],m=/^[A-Z]{1,2}(\d+)$/.exec(k),g=m&&(s==='exp'?k in DEF.exp:+m[1]<=MAXROW),good=!!g&&!stale(s,k,v);
if(good){if(typeof v==='number'){var kd=kind(s,k),l=kd==='t'?null:lim(kd,k);good=isFinite(v)&&(!l||(v>=l[0]&&v<=l[1]))}else good=typeof v==='string'&&v.length<400&&(kind(s,k)==='t'||v.charAt(0)==='=')}
if(good){N[s][k]=v;ok++}else bad++})});
if(!eqS(S,N)){hist.push(clone(S));if(hist.length>200)hist.shift();S=N;persist();refresh()}
return [ok,bad]}
function applyRange(c,t,a,b){
var x=valid('d','E3',t),lo=valid('y','C3',a),hi=valid('y','C3',b),rows=[],y,g;
if(x===undefined||lo===undefined||hi===undefined||!/^[EFGHK]$/.test(c))return -1;
var o=NOBL;NOBL=1;
try{for(y=3;y<=lastRow();y++){g=cellVal('dc','C'+y);if(typeof g==='number'&&g>=lo&&g<=hi&&(c==='K'||!isF('dc',c+y)))rows.push(c+y)}}finally{NOBL=o}
if(!rows.length)return 0;
hist.push(clone(S));if(hist.length>200)hist.shift();rows.forEach(function(k){S.dc[k]=x});persist();refresh();return rows.length}
function abNums(){var n=keyNums();return {out:n.dep?n.out:'',end:rup(n.end),lo:rup(n.lo),need:n.need}}
function saveA(){planA=abNums()}
function abHtml(){
if(!planA)return esc(T.noA);
var c=abNums(),dl=function(x){return (x>0?'+':'')+usd(x)},yr=function(o){return o===''?T.never:o},rows=[[T.runsOut,yr(planA.out),yr(c.out),typeof planA.out==='number'&&typeof c.out==='number'?(c.out-planA.out>0?'+':'')+(c.out-planA.out):'']];
[['end',T.k4],['lo',T.k5],['need',T.k2]].forEach(function(q){rows.push([q[1],usd(planA[q[0]]),usd(c[q[0]]),dl(c[q[0]]-planA[q[0]])])});
return '<table class="sp-t sp-abt"><tr><th></th><th>'+esc(T.abA)+'</th><th>'+esc(T.abNow)+'</th><th>'+esc(T.abChg)+'</th></tr>'+rows.map(function(r){return '<tr><td class="sl">'+esc(r[0])+'</td><td>'+esc(r[1])+'</td><td>'+esc(r[2])+'</td><td>'+esc(r[3])+'</td></tr>'}).join('')+'</table>'}
function sideLines(){
var w=$('spWarn'),ab=$('spAB'),c=$('spChart'),cc=$('spChartC'),s=chartSvg();
if(w)w.innerHTML=warns().map(function(x){return '<div>'+esc(x)+'</div>'}).join('');
if(ab)ab.innerHTML=cmpOn?abHtml():'';
if(c)c.innerHTML=s;if(cc)cc.style.display=s?'':'none'}
function rangeBar(){return '<div class="sp-rng"><span>'+esc(T.apply)+'</span><select id="spRc">'+'EFGHK'.split('').map(function(c){return '<option value="'+c+'">'+esc(DEF.dc[c+'1'])+'</option>'}).join('')+'</select><input id="spRv" placeholder="$" size="8" autocomplete="off"><span>'+esc(T.rngTo)+'</span><input id="spRa" size="3" autocomplete="off"><span>-</span><input id="spRb" size="3" autocomplete="off"><button id="spRg" class="sp-bd">'+esc(T.go)+'</button><button id="spUndo2">'+esc(T.undo)+'</button></div>'}
function blockKey(i,k,e){if(i.readOnly||!keyBad(k,e,i.value,i.selectionStart,i.selectionEnd))return false;e.preventDefault();return true}
function pasteBad(k,t){
if(/[()]/.test(t)||/\d\s*e\s*[-+]?\d/i.test(t)||/\..*\./.test(t)||/%\s*\S/.test(t)||/\d\s*[kmb]\b/i.test(t)||/\.\d*,/.test(t)||/\d\s*[a-z][a-z\s]*\d/i.test(t))return true;
var n=(t.match(/-/g)||[]).length;return k==='d'?n>1||(n===1&&!/^[\s$]*-/.test(t)):n>0}
function pasteTo(i,k,e,fn){var d=e.clipboardData;if(!d||k==='t'||i.readOnly)return;e.preventDefault();var v=i.value,res=v.slice(0,i.selectionStart)+d.getData('text')+v.slice(i.selectionEnd);if(pasteBad(k,res)){i.classList.add('rd');return}i.value=clean(k,res);fn()}
function sync(){$('kpis').style.display=$('v-spend').classList.contains('on')?'none':''}
function load(){
var P=RPT.pay&&RPT.pay(),sp=P&&P.spend_plan;
S=clone(DEF);hist=[];before=null;if(sp){['exp','dc'].forEach(function(s){if(sp[s])Object.keys(sp[s]).forEach(function(k){if(!stale(s,k,sp[s][k]))S[s][k]=sp[s][k]})})}
build();refresh()}
var OLDEXP={G6:1,J6:1,G7:1,J7:1,G8:1,J8:1,G9:1,J9:1,G20:1,J20:1,G24:1,J24:1,P5:1,I16:1,F21:1,G21:1,I21:1,J21:1,F22:1,G22:1,I22:1,J22:1};
var OLDLBL={F8:'Expense 1',I8:'Expense 1',F9:'Expense 2',I9:'Expense 2',F14:'Need from Portfolio',I14:'Need from Portfolio',I13:'SSN (for 2)'};
var OLDF={G14:'=G11-G12',J14:'=J11-J12-J13',P7:'=P4-P5',G16:'=P12',J18:'=J17-J16',J16:'=G17',G18:'=G17-G16'},OLDF2={G18:'=MAX(0,G17-G16)',J18:'=J17-J16+1',G14:'=MAX(0,G11-G12)',J14:'=MAX(0,J11-J12-J13)',J13:'=MAXCOL(K3)'};
function stale(s,k,v){
if(s==='exp')return !!OLDEXP[k]||OLDLBL[k]===v||OLDF[k]===v||OLDF2[k]===v;
if(/^B\d+$/.test(k))return true;
if(typeof v!=='string')return false;
if(/^J\d+$/.test(k)&&k!=='J2')return /^=M\d+\*J\$?2$/.test(v)||/^=\(M\d+-I\d+\)\*J\$?2$/.test(v);
if(/^L\d+$/.test(k))return /^=I\d+-J\d+-K\d+$/.test(v);
return /^M\d+$/.test(k)&&(/^=M\d+-L\d+$/.test(v)||/^=M\d+-L\d+\+MAX\(0,J\d+\+K\d+-I\d+\)$/.test(v))}
function pageDir(){
try{if(location.protocol==='file:')return decodeURIComponent(location.pathname).replace(/^\/([A-Za-z]:)/,'$1').replace(/\/[^\/]*$/,'').replace(/\//g,'\\')}
catch(e){warn('pageDir',e)}
return ''}
RPT.pageDir=pageDir;
function dlHint(){var d=pageDir();return RPT.T.sp.dlDl+(d?'\n'+RPT.T.sp.dlAt+' '+d:'')}
function tableRows(){
var last=lastRow(),auto=autoLabels(),rows=[TLC.map(function(c){return DEF.dc[c+'1']||''})];
for(var y=2;y<=last;y++)rows.push(TLC.map(function(c){
if(y===2&&FIRST.indexOf(c)<0)return '';
var r=c+y,raw=rawOf('dc',r),v=cellVal('dc',r),k=kind('dc',r);
if(c==='A')return blankRow(y)?'':raw!=null&&raw!==''?String(raw):(auto[y]||'');
if(v instanceof Err)return v.m;
if(typeof v!=='number')return v==null?'':String(v);
if(k==='p')return disp('dc',r,k);
if(k==='y')return Math.round(v*100)/100;
return rup(v)}));
return rows}
function tsv(rows){return rows.map(function(r){return r.map(function(x){return String(x).replace(/[\t\r\n]+/g,' ')}).join('\t')}).join('\r\n')}
var FILL_IN='FBF0D6',FILL_LT='FEF9F0',FILL_HD='E4E7EE',COLW=[34,8,8,8,13,13,13,13,15,13,13,13,13,13,15];
function tableFmt(){
var last=lastRow(),f=[TLC.map(function(){return {nf:'t',b:1,fill:FILL_HD}})];
for(var y=2;y<=last;y++)f.push(TLC.map(function(c){
if((y===2&&FIRST.indexOf(c)<0)||blankRow(y))return {nf:'t',b:0,fill:''};
var r=c+y,raw=rawOf('dc',r);
if(c==='A')return {nf:'t',b:0,fill:FILL_LT};
var typed=!isF('dc',r)&&raw!=null&&raw!=='';
return {nf:kind('dc',r),b:typed?1:0,fill:typed?FILL_IN:''}}));
return f}
function cellTxt(x,c){return typeof x==='number'&&c&&c.nf==='d'?usd(x):String(x)}
function cellCss(c){
var s='white-space:nowrap;text-align:'+(c.nf==='t'?'left':'right')+';';
if(c.b)s+='font-weight:bold;';if(c.fill)s+='background-color:#'+c.fill+';';
if(c.nf==='d')s+='mso-number-format:"\\$\\#\\,\\#\\#0";';
return s}
function htmlTable(rows,fmt){return '<table style="border-collapse:collapse">'+rows.map(function(r,i){return '<tr>'+r.map(function(x,j){var t=i?'td':'th',c=fmt&&fmt[i]&&fmt[i][j];return '<'+t+(c?" style='"+cellCss(c)+"'":'')+'>'+esc(cellTxt(x,c))+'</'+t+'>'}).join('')+'</tr>'}).join('')+'</table>'}
function copyTable(){
var rows=tableRows(),txt=tsv(rows);
try{
if(navigator.clipboard&&window.ClipboardItem){navigator.clipboard.write([new ClipboardItem({'text/plain':new Blob([txt],{type:'text/plain'}),'text/html':new Blob([htmlTable(rows,tableFmt())],{type:'text/html'})})]).then(function(){tip(T.copied,$('spCopy'))},function(e){warn('copy',e);navigator.clipboard.writeText(txt)});return}
if(navigator.clipboard){navigator.clipboard.writeText(txt).then(function(){tip(T.copied,$('spCopy'))});return}
}catch(e){warn('copy',e)}
}
function onCopy(e){
try{
var a=document.activeElement;if(a&&a.tagName==='INPUT'&&a.selectionEnd>a.selectionStart)return;
var sel=window.getSelection&&window.getSelection(),box=document.querySelector('#spBody .sp-tl');
if(!sel||!sel.rangeCount||sel.isCollapsed||!box||!e.clipboardData)return;
var rg=sel.getRangeAt(0);if(!rg.intersectsNode(box))return;
var rows=tableRows();e.clipboardData.setData('text/plain',tsv(rows));e.clipboardData.setData('text/html',htmlTable(rows,tableFmt()));e.preventDefault()
}catch(x){warn('onCopy',x)}
}
document.addEventListener('copy',onCopy);
var NS='http://schemas.openxmlformats.org/',SM=NS+'spreadsheetml/2006/main',PR=NS+'package/2006/relationships',OD=NS+'officeDocument/2006/relationships',CT='application/vnd.openxmlformats-officedocument.spreadsheetml.',RELS='<Relationships xmlns="'+PR+'">',CRCT=null;
function crc32(b){if(!CRCT){CRCT=[];for(var n=0;n<256;n++){var c=n;for(var k=0;k<8;k++)c=c&1?0xEDB88320^(c>>>1):c>>>1;CRCT[n]=c>>>0}}var c2=0xFFFFFFFF;for(var i=0;i<b.length;i++)c2=CRCT[(c2^b[i])&255]^(c2>>>8);return (c2^0xFFFFFFFF)>>>0}
function u8(s){var o=[];for(var i=0;i<s.length;i++){var c=s.charCodeAt(i);if(c<128)o.push(c);else if(c<2048)o.push(192|c>>6,128|c&63);else o.push(224|c>>12,128|(c>>6)&63,128|c&63)}return o}
function le(n,w){var o=[];for(var i=0;i<w;i++)o.push(Math.floor(n/Math.pow(2,8*i))&255);return o}
function zip(files){
var out=[],cen=[],off=0,z=le(0,2);
files.forEach(function(f){
var nm=u8(f[0]),d=u8(f[1]),cr=crc32(d);
var loc=[].concat(le(0x04034b50,4),le(20,2),z,z,z,le(0x21,2),le(cr,4),le(d.length,4),le(d.length,4),le(nm.length,2),z,nm);
cen.push([].concat(le(0x02014b50,4),le(20,2),le(20,2),z,z,z,le(0x21,2),le(cr,4),le(d.length,4),le(d.length,4),le(nm.length,2),z,z,z,z,le(0,4),le(off,4),nm));
out=out.concat(loc,d);off+=loc.length+d.length});
var cd=[].concat.apply([],cen);
out=out.concat(cd,le(0x06054b50,4),z,z,le(files.length,2),le(files.length,2),le(cd.length,4),le(off,4),z);
return new Uint8Array(out)}
function xmlEsc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/[\ud800-\udbff][\udc00-\udfff]|[^\x20-\x7e]/g,function(c){var p=c.codePointAt(0);return (p<32&&p!==9&&p!==10&&p!==13)||(p>=0xd800&&p<=0xdfff)||p===0xfffe||p===0xffff?'':'&#'+p+';'})}
function xlsxBytes(rows,sheet,fmt,widths){
var xfs=[{nf:'t',b:0,fill:''}],xi={'t|0|':0},fills=[];
function xf(c){var k=c.nf+'|'+(c.b?1:0)+'|'+(c.fill||'');if(!(k in xi)){xi[k]=xfs.length;xfs.push({nf:c.nf,b:c.b?1:0,fill:c.fill||''});if(c.fill&&fills.indexOf(c.fill)<0)fills.push(c.fill)}return xi[k]}
var sd=rows.map(function(r,ri){return '<row r="'+(ri+1)+'">'+r.map(function(x,ci){
var ref=colS(ci+1)+(ri+1),c=fmt&&fmt[ri]&&fmt[ri][ci],s='';
if(c&&c.nf==='p'&&typeof x==='string'){var pv=parseFloat(x);if(isFinite(pv))x=pv/100}
if(c){var id=xf(c);if(id)s=' s="'+id+'"'}
if(x===''||x==null)return c&&c.fill?'<c r="'+ref+'"'+s+'/>':'';
return typeof x==='number'?'<c r="'+ref+'"'+s+'><v>'+x+'</v></c>':'<c r="'+ref+'"'+s+' t="inlineStr"><is><t>'+xmlEsc(x)+'</t></is></c>'}).join('')+'</row>'}).join('');
var cols=widths?'<cols>'+widths.map(function(w,i){return '<col min="'+(i+1)+'" max="'+(i+1)+'" width="'+w+'" customWidth="1"/>'}).join('')+'</cols>':'';
var NF={d:164,y:1,p:10,t:0};
var sty='<styleSheet xmlns="'+SM+'"><numFmts count="1"><numFmt numFmtId="164" formatCode="\\$#,##0;-\\$#,##0"/></numFmts><fonts count="2"><font><sz val="11"/><name val="Calibri"/></font><font><b/><sz val="11"/><name val="Calibri"/></font></fonts><fills count="'+(2+fills.length)+'"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill>'
+fills.map(function(c){return '<fill><patternFill patternType="solid"><fgColor rgb="FF'+c+'"/><bgColor indexed="64"/></patternFill></fill>'}).join('')+'</fills><borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs count="'+xfs.length+'">'
+xfs.map(function(x){return '<xf numFmtId="'+NF[x.nf]+'" fontId="'+x.b+'" fillId="'+(x.fill?2+fills.indexOf(x.fill):0)+'" borderId="0" xfId="0" applyNumberFormat="1" applyFont="1" applyFill="1"/>'}).join('')+'</cellXfs></styleSheet>';
var H='<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n';
return zip([
['[Content_Types].xml',H+'<Types xmlns="'+NS+'package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="'+CT+'sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="'+CT+'worksheet+xml"/><Override PartName="/xl/styles.xml" ContentType="'+CT+'styles+xml"/></Types>'],
['_rels/.rels',H+RELS+'<Relationship Id="rId1" Type="'+OD+'/officeDocument" Target="xl/workbook.xml"/></Relationships>'],
['xl/workbook.xml',H+'<workbook xmlns="'+SM+'" xmlns:r="'+OD+'"><sheets><sheet name="'+xmlEsc(sheet||'Year by year')+'" sheetId="1" r:id="rId1"/></sheets></workbook>'],
['xl/_rels/workbook.xml.rels',H+RELS+'<Relationship Id="rId1" Type="'+OD+'/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="'+OD+'/styles" Target="styles.xml"/></Relationships>'],
['xl/styles.xml',H+sty],
['xl/worksheets/sheet1.xml',H+'<worksheet xmlns="'+SM+'">'+cols+'<sheetData>'+sd+'</sheetData></worksheet>']])}
function dlXlsx(){
var a=document.createElement('a'),u=URL.createObjectURL(new Blob([xlsxBytes(tableRows(),'Year by year',tableFmt(),COLW)],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'}));
a.href=u;a.download='year_by_year.xlsx';document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(u)},2000);
tip(T.xlsxDone,$('spXlsx'))}
var tipT=null;
var tipA=null,tipHooked=false;
function tipPlace(){
var e=$('spTip');if(!e||!tipA||!tipA.getBoundingClientRect)return;
var r=tipA.getBoundingClientRect(),w=e.offsetWidth||0,h=e.offsetHeight||0,x=r.left,y=r.bottom+2;
if(window.innerWidth&&w&&x+w>window.innerWidth-8)x=Math.max(4,window.innerWidth-8-w);
if(window.innerHeight&&h&&y+h>window.innerHeight-4)y=Math.max(4,window.innerHeight-4-h);
e.style.left=Math.round(x)+'px';e.style.top=Math.round(y)+'px'}
function tip(msg,anchor){
var e=$('spTip');if(!e)return;e.textContent=msg;e.classList.add('on');
tipA=anchor||null;tipPlace();
if(!tipHooked&&window.addEventListener){tipHooked=true;window.addEventListener('scroll',tipPlace,true);window.addEventListener('resize',tipPlace)}
if(tipT)clearTimeout(tipT);tipT=setTimeout(function(){e.classList.remove('on');tipT=null;tipA=null},2500)}
RPT.on('payload',load);
RPT.on('view',sync);RPT.on('data',sync);
RPT.on('loaded',function(){if(!$('spReset'))load()});
RPT.spendT={cellVal:cellVal,rawOf:rawOf,rup:rup,lastRow:lastRow,disp:disp,kind:kind,tableRows:tableRows,tableFmt:tableFmt,htmlTable:htmlTable,pageDir:pageDir,COLW:COLW,xlsxBytes:xlsxBytes,crc32:crc32,stale:stale,dlHint:dlHint,DEF:DEF0,DEFNEW:DEF,reset:function(){S=clone(DEF0);memo={}},resetNew:function(){S=clone(DEF);memo={}},uploadPlan:uploadPlan,set:function(sh,r,v){S[sh][r]=v;memo={}},autoLabels:autoLabels,depRow:depRow,blankRow:blankRow,tip:tip,refresh:refresh,clean:clean,keyBad:keyBad,valid:valid,build:build,hist:function(){return hist.length},chartSvg:chartSvg,warns:warns,applyRange:applyRange,saveA:saveA,abHtml:abHtml,sideLines:sideLines,rangeBar:rangeBar};
build();refresh();
})();
