var system = ['report/'],
    interUrl = {
        mockList: "",
        basic: "/",
        notice:{
            relieveVin:"blacklist/relieveVin",
            intercept:"blacklist/intercept",
            getDetail:"notice/warning/getDetail",
        	initParams:"notice/warning/initParams",
        	orgList:"notice/warning/getParamOrgList",
        	typeList:"notice/warning/getParamTypeList",
        	noticeList:"notice/warning/getNoticeList",
        	noticeNums:"notice/warning/getNoticeNums"
        },
        release:{
        	noteList:"release/note/list",
            appList:"release/note/appPushList",
            push:"release/note/appPush",
        	details:"release/note/details",
        	download:"release/note/download"
        },
        org: {
      	  organizationAllDir: "organization/list",
      	  add: "organization/add",
      	  get: "organization/company/get",
      	  update: "organization/update",
      	  setBank: "organization/bankComp/update",
      	  insuranceList: "organization/insurance/list",
      	  setInsurance: "organization/insurance/update",
      	  userList: "za/user/list",
      	  accountAdd: "company/account/add",
      	  accountList: "company/account/list",
      	  accountStop: "company/account/status",
      	  accountDel: "company/account/del"
        },
        postloan: {
            importFile: "/postloan/excel/Import",
            loanList:"postloan/list",
            download:"/postloan/template/download",
            historyPayment : 'postloan/status',
            overdueList:"postloan/overdual/list",
            exportExcel:"/postloan/overdual/download",
            historyCaseProcessList: "lawsuit/history/list"
        },
        common: {
            blacklistCheck:"blacklist/check",
        	getGroupNew:"group/new",
            login: "login",
            getSystemVersion : "getSystemVersion",
            getSystemName: "getSystemName",
            getProvince: "area/getProvince",
            getCity: "area/getCityByProvince",
            getArea: "area/getCountyByCity",
            getCompany: "carDealer/branchComp/list",
            getGroup: "group/list",
            GroupByAuth:'group/listByAuth',
            branchAndGroupComo: "carDealer/branchAndGroupComp/list",
            orgInfo: "org/info",
            orgList: "org/list",
            orgRoleList: "org/ListByMenuCode",
            orgListByAuth:"org/listByAuth",
            ruleList: "role/list",
            brandList: "brandinfo/getbrandinfobychar",
            carList: "brandinfo/getbrandinfobycode",
            carModels: "brandinfo/getcarname",
            opinion: "opinion/save",
            opinionOnly: "opinion/only",
            getOpinion: "opinion/get",
            approveOpinion: "opinion/approveOpinion",
            loanCarList: "cooperation/carDealer/list",
            insuranceList: "cooperation/insurance/list",
            bankInfo: "cooperation/bank/info",
            flowGet: "flow/get",
            getLoanFlowStatusList: "infoQuery/getLoanFlowStatusList",
            getAreaFullNameByAreaName: "loanCarPlateArea/getAreaFullNameByAreaName",
            cooperation: "cooperation/thirdCooperation/list",
            //获取图片信息
            getImgInfor: "user/register",
            report: "vistis/report",
            secondCarAssessment: "estimate/getByApplyId",
            loanApplyBankList:"loanApply/bank/list",
            getRiskRule: "loanRiskRules/getRiskRule",
            getRiskRuleDetails: "loanRiskRules/getRiskRuleDetails",
            faceList: "loanRiskRules/faceList",
            faceComparision: "loanRiskRules/faceComparision",
            getLoanScoreInfo:"loanApprovalInfo/getLoanScoreInfo",
            getLoanScoreFile:"loanApprovalInfo/getLoanScoreFile",
            getLoanScoreComment:"loanApprovalInfo/getLoanScoreComment",
            getLoanScoreItem:"loanApprovalInfo/getLoanScoreItem",
            loanScoreFileSave:"loanApply/loanScoreFileSave",
            loanScoreItemSave:"loanApply/loanScoreItemSave",
            commonImgUploadFile: "postLoanFileInfo/uploadFile",
            commonImgDelFile: "postLoanFileInfo/delFile",
            commonImgGetFileList: "postLoanFileInfo/getFileList"
        },
        user: {
            login: "login",
            getUser: "user/session/get",
            menu: "za/menu/list",
            logOut: "logout"
        },
        gps:{
        	installList:"gps/monitor/installList",
        	installInfo:"gps/monitor/installInfo",
        	warningList:"gps/monitor/warningList",
        	gpsPos:"gps/monitor/position",
            gpsTrack:"gps/monitor/track"

        },
        purchase: {
        	returnGps:"gpsReturn/returnedGps",
        	preReturn:"gpsReturn/preReturn",
        	returnList:"gpsReturn/getReturnList",
        	orgOrStockList:"gpsBase/orgOrStockList",
        	getApplyStock:"gpsBase/getApplyStock",
        	allotDetails:"gpsAllot/getDetail",
        	allotGps:"gpsAllot/allotConfirm",
        	preAllot:"gpsAllot/saveDetails",
        	allotGetGpsList:"gpsAllot/getGpsList",
        	allotList:"gpsAllot/getAllotList",
        	contractPre:"contract/preAdd",
            contractlist: "contract/listcontract",
            createApplyNo:"gpsPurchase/apply/createNo",
        	gpsPreSubmit:"gpsPurchaseApply/process/preSubmit",
        	gpsSubmit2next:"gpsPurchaseApply/process/submit2next",
        	gpsBack:"gpsPurchaseApply/process/back2pre",
        	gpsCancel:"gpsPurchaseApply/process/cancel",
        	gpsPurchaseGet:"gpsPurchase/apply/get",
        	gpsPurchaseAdd:"gpsPurchase/apply/add",
        	gpsPurchasePreAdd:"gpsPurchase/apply/preAdd",
        	gpsItemList:"gpsPurchase/apply/itemList",
        	contractadd:"contract/addcontract",
        	getPurcaseItems:"contract/listPurchaseDetailBycontract",
        	contractdelete:"contract/deleteContract",
            contractget: "contract/getContract",
            contractcompute:"contract/computecontractDetailBycontract",
            contractlistitem: "contract/listcontractDetailBycontract",
            contractupdate: "contract/updateContract",
            contractaddGet: "purchase/contract/addGet",
            contractGetPurchaser:"contract/listAddcontract",
            contractgetDetail: "contract/listcontractDetail",
            notStocklist: "gps/storage/todo",
            stockList: "purchase/stock/stockList",
            stockaddGet: "gps/storage/list",
            stockaddDetail: "gps/storage/detail",
            stockImport: "gps/storage/import",
            useNotList: "gps/useList",
            useList: "purchase/stock/useList",
            userStockList: "gps/loan/useList",
            stockadd: "gps/storage/submit",
            stockUpdate: "gps/storage/update",
            confirm: "gps/storage/confirm",
            getDetail: "purchase/stock/getDetail",
            saveStock: "gps/loan/save",
            stockDel: "purchase/stock/delStock",
            updatecontractAmt :"contract/updateprice"
        },
        //库存管理
        stockmanager:{
        	list:"stockManager/getStockGpsList",
        	getGps:"stockManager/getStockGps",
        	operation:"stockManager/dealOperation"
        },
        customer: {
            list: "customer/import/list",
            get: "customer/import/get",
            close: "customer/import/close",
            reject: "customer/import/reject",
            branchReject: "customer/import/branchReject",
            groupList: "customer/import/list1",
            branchList: "customer/import/list",
            allot: "customer/import/allot",
            groupBranch: "customer/import/setBranch",
            getVisitAddressGPSInfo: "infoQuery/getVisitAddressGPSInfo",
            query:"customer/query",
            getOrgOrGroup:"customer/orgOrGroupList",
            exportExcel:"customer/creditInfo/download",
            customCancel:"customer/cancelToCreditAccept", //退回征信接收
            getNetCreditInfoDetail: "customer/credit/getNetCreditInfoDetail"
        },
        gr: {
            getPhoto: "photoPreview/getAllDocInfo",
            list: "customer/list",
            add: "customer/add",
            update: "customer/update",
            get: "customer/get",
			orderCredit: "car/order/credit/init",
            delete: "customer/del",
            history: "customer/history",
            teamList: "customer/manager/list",
            customerAssetList: "customer/asset/list",
            relationShipList: "customer/relationship/list",
            customerManagerDel: "customer/manager/del",
            customerStatus: "customer/manager/setStatus",
            customerSetAut: "customer/manager/setAuth",
            customerRelationDel: "customer/relationship/del",
            customerRelationAdd: "customer/relationship/add",
            customerRelationEdit: "customer/relationship/edit",
            documentDir: "loanApprovalInfo/getApprovalDocumentDir",
			documentUpdateResult: "loanDocumentCheck/updateResult",
			documentExport: "loanDocumentCheck/export",
			documentGetCheckStatus: "loanDocumentCheck/getCheckStatus",
            //documentAllDir: "loanApprovalInfo/getAllApprovalDocumentDir",
            recordDocQueryHistory: "photoPreview/recordDocQueryHistory",
            documentAllDir: "loanApprovalInfo/getApprovalDocumentDir",
            documentList: "loanApprovalInfo/getApprovalDocument",
            checkDocHasFile:"loanApprovalInfo/checkHasFile",
            documentCopy: "loanDocument/copyFile",
            assetDistribution: "loanDocument/assetDistribution",
            recoveryFile: "loanDocument/recoveryFile",
            moveDocument: "loanDocument/moveFile",
            delDocument: "loanDocument/deleteFile",
            loanList: "customer/loan/list",
            loanInfo: "loanApprovalInfo/getApprovalBudgetInfo",
            userList: "user/list",
            managerAdd: "customer/manager/add",
            loanApprovalInfo: "loanApprovalInfo/getApprovalAsserts",
            getApprovalList: "loanApprovalInfo/getApprovalGuarantor",
            getLoanGuarantorInfo: "loanInside/getLoanGuarantorInfo",
            dGetLoanGuarantorInfo: "deliver/getLoanGuarantorInfo",
            lauchLoanGuarantorInfo: "loanInside/lauchLoanGuarantorInfo",
            uploadImage: "loanDocument/uploadFileString",
            upFile: "loanDocument/uploadFileByStream",
            downLoad: "loanDocument/downloadAllFile",
            flow: "flow",
            record: "customer/history/detail",
            loanQuery: "infoQuery/loanInfo",
            getLoanModifyHistory: "infoQuery/getLoanModifyHistory",
            creditList: "loanApply/creditList",
            carDealerList: "cooperation/carDealer/list",
            bankList: "cooperation/bank/list",
            bankCompanyList: "cooperation/bank/refList",
            getOpeningBank: "cooperation/openingBank/all",
            getCashBank:"cooperation/cash/bank",
            flowUser: "flowUser",
            loanInfoList: "infoQuery/loanInfo",
            getLoanModifyList: "loanModify/getLoanModifyList/modify",
            getLoanCancelList: "loanModify/getLoanModifyList/cancel",
            launchLoanModifyApply: "loanModify/launchLoanModifyApply",
            expressCompanyCode: "cooperation/codeLibrary/list",
            reditEdit: "customer/credit/editRelavants",
            back2pre: "credit/back2pre",
            getLoanInfoOverview: "infoQuery/getLoanInfoOverview",
            getFlowPath: "infoQuery/getFlowPath",
            patchSearch: "patch/search",
            patchSearchManager: "patch/searchManager",
            getBankAll: "cooperation/bank/all",
            getTemplateList: "loanOverdueLoadHis/getTemplateList",
            loanOverdueLoadHisList: "loanOverdueLoadHis/list",
            uploadExcel: "loanOverdueLoadHis/uploadExcel",
            loanOverdueLoadHisFinish: "loanOverdueLoadHis/finish",
            loanOverdueLoadHisRematch: "loanOverdueLoadHis/rematch",
            loanOverdueLoadHisDelete: "loanOverdueLoadHis/delete",
            getMatchFieldList: "loanOverdueLoadHis/getMatchFieldList",
            getVinImage:"loanDocument/getVinImage",
            loanPayment:"loan/payment/detail",//支付明细
            deletes: "loanOverdueLoadHis/deletes",
            loanAmoutProperty:"user/loan/propertyQuery",
    },
        credit: {
            creditList: "customer/credit/list",
            creditInfo: "customer/credit/get",
			loanDocumentCheckList: "loanDocumentCheck/list",
            loanCreditInfo: "loanApprovalInfo/getCustomerCreditInfo",
            loanRiskCreditInfo: "loanApprovalInfo/loanRiskCreditInfo",
            customerGet: "customer/get",
            creditAdd: "customer/credit/add",
            creditPreAdd: "customer/credit/preAdd",
            checkCardId: "customer/verifyIdentity",
            creditUser: "loanApply/list",
            creditRisk: "customer/credit/risk/list",
            creditSubmit: "credit/preSubmit",
            creditImport: "customer/import/get",
            creditSubmit2: "credit/submit2next",
            creditEdit: "customer/credit/editRelavants",
            addRelavant: "customer/credit/addRelavant",
            addCreditFile: "customer/credit/addCreditFile",
            delCreditFile: "customer/credit/delCreditFile",
            delRelavant: "customer/credit/delRelavant",
            back2pre: "credit/back2pre",
            cancel: "credit/cancel",
            close: "credit/close",
            CustomerCreditList: "infoQuery/getCustomerCreditList",
            getCustomerCreditListByProjectId: "loanApprovalInfo/getCustomerCreditList",//参数都是loanApplyId,creditId,projectId(自动转换)
            //getCustomerCreditListByProjectId: "infoQuery/getCustomerCreditListByProjectId",//参数都是loanApplyId,creditId,projectId(自动转换)
            determined: "customer/credit/determined",
            download: "customer/credit/file/download"
        },
        myTask: {
            backSelectUser:"loanReview/webBackSelectUserList",
            TaskList: "mytasks",
            searchTaskList: "mytasks/search",
            getAssign: "loanAssign/getAssign",
            editAssign: "loanAssign/saveAssign",
            listsAssignMain: "loanAssign/listsAssign/main",
            listsAssignVice: "loanAssign/listsAssign/vice",
            getSurvery: "loanAssign/getSurvery",
            editLoanerInfo: "loanInside/editLoanerInfo",
            saveBudgetInfo: "loanInside/saveBudgetInfo",
            roleLists: "role/list",
            approvalInfo: "loanApprovalInfo/getApprovalInfo",
            approvalBaseInfo: "loanApprovalInfo/getApprovalBaseInfo",
            occupationList: "cooperation/codeLibrary/list", //职业
            unitList: "cooperation/codeLibrary/list", //单位经济性质
            jobList: "cooperation/codeLibrary/list", //职务
            customerContacter: "loanApprovalInfo/getLoanCustomerContacter",
            approvalBudgetInfo: "loanApprovalInfo/getApprovalBudgetInfo",
            approvalAsserts: "loanApprovalInfo/getApprovalAsserts",
            approvalGuarantor: "loanApprovalInfo/getApprovalGuarantor",
            paymentGet: "loan/payment/get",
            guaranteeList: "cooperation/guarantee/list",
            preBack:"loanReview/preBack",
            back2pre: "loanReview/back2pre",
            preSubmit: "loanReview/preSubmit",
            submit2nextForBach:"loanReview/submit2nextForBach",
            queryApproveInfoForBatch:"loanReview/queryApproveInfoForBatch",//付款审批数据
            submit2next: "loanReview/submit2next",
            preBack2BudgetOfficeStaff:"loanReview/preBack2BudgetOfficeStaff",
            back2BudgetOfficeStaff: "loanReview/back2BudgetOfficeStaff",
            closeLoanApply: "loanReview/closeLoanApply",
            preLongTop: "loanReview/preLongTop",
            submit2LongTop: "loanReview/submit2LongTop",
            submit2nextForBach : "loanReview/submit2nextForBach",
            querySumAmountForBach: "loanReview/querySumAmountForBach",
            deleteLoanCustomerContacter: "loanInside/deleteLoanCustomerContacter",
            modifyLoanCustomerContacter: "loanInside/modifyLoanCustomerContacter",
            saveLoanCustomerContacter: "loanInside/saveLoanCustomerContacter",
            paymentSave: "loan/payment/saveToCarDealer",
            relateLoanGuarantor: "loanInside/relateLoanGuarantor",
            saveLoanGuarantorInfo: "loanInside/saveLoanGuarantorInfo",
            dSaveLoanGuarantorInfo: "deliver/saveLoanGuarantorInfo",
            deleteLoanGuarantorInfo: "loanInside/deleteLoanGuarantorInfo",
            addLoanGuarantorInfo: "loanInside/addLoanGuarantorInfo",
            saveToGuarantee: "loan/payment/saveToGuarantee",
            paymentGetGuarantee: "loan/payment/getGuaranteePayment",
            getCarDealerPayment: "loan/payment/getCarDealerPayment",
            getAccountList: "cooperation/carDealer/account/list",
            getAccountLists: "carDealer/account/list/on",
            getCapatilPoolAccountList: "cooperation/getCapatilPoolAccountList",
            printBudgetInfo: "loanInside/printBudgetInfo",
            getApprovalOtherInfo: "loanApprovalInfo/getApprovalOtherInfo",
            getLoanCollection: "loan/payment/getLoanCollection",
            saveLoanCollection: "loan/payment/saveLoanCollection",
            myTasksRead: "mytasks/read",
            reverseSpouseInfo: "loanInside/reverseSpouseInfo",
            updateCustomerCredit: "loanApply/updateCustomerCredit",
            isReg: "loanApprovalInfo/getContractsInfo",
            isRegB: "loanApprovalInfo/getDearlerInfoByName",
            preBack2LoanLaunch: "loanReview/preBack2LoanLaunch",
            back2LoanLaunch: "loanReview/back2LoanLaunch",
            need2Door: "loanApply/need2Door",
            getDocBudgetInfo: "infoQuery/getLoanFeeInfo",
            deGetApprovalFeeInfo: "deliver/getApprovalFeeInfo",
            deGetSaveFeeInfo: "deliver/saveFeeInfo",
            getPaymentToken:"loan/payment/getPaymentToken",  //获取token值
            preStartPayment:"loan/payment/preStartPayment",   //校验时间
            startPayment:"loan/payment/startPayment",         //发起付款
            rePayment:"loan/payment/rePayment",                //重新提交
            paymentList:"loan/payment/paymentList",            //付款结果
            paymentTypeList: "cooperation/codeLibrary/list", //付款类型
            paymentCodeList: "cooperation/codeLibrary/list", //付款方式
            companyAccount: "cooperation/companyAccount/all", //付款账户
            manualPayment:  "loan/payment/manualPayment",      //人工处理
            getPayType:"loan/payment/payMode",                 //付款方式
            getPaymentRecords:"loan/payment/paymentRecords",
            printPaymentRecord:"loan/payment/printRecord",
            savePaymentRecord:"loan/payment/savePaymentRecord"
},
        loanDetail: {
            launch: "loanApply/launch",
            loanGet: "loanApply/get",
            loanUpdate: "loanApply/update",
			verify: "loanReview/verify",
            loansave: "loanApply/save",
            loansubmit: "loanReview/preSubmit",
            loanList: "loanApply/creditList",
            loanInfo: "loanInfo/getLoanCarInfoAndLicensePlateInfo",
            getLoanContractInfo: "loanInfo/getLoanContractInfo",
            loanReview: "loanReview/cancel",
            getLoanProjectNo: "loanApply/getLoanProjectNo",
            getLoanFeeInfo: "loanApply/getLoanFeeInfo",
            getFinancialProduct: "loanApply/getFinancialProduct",
            getSecondHandCarList: "loanApply/getSecondHandCarList",
            getLoanCarInfoAndLicensePlateInfo: "infoQuery/getLoanCarInfoAndLicensePlateInfo",
            getPledgeInfoInfo: "infoQuery/getPledgeInfoInfo",
            getBankRemittanceInfo: "infoQuery/getBankRemittanceInfo",
            getRepaymentCardInfo: "infoQuery/getRepaymentCardInfo",
            getLoanDocumentTransmitList: "infoQuery/getLoanDocumentTransmitList",
            infoQueryGetLoanContractInfo: "infoQuery/getLoanContractInfo",
            getLoanContractRepayPlanList: "infoQuery/getLoanContractRepayPlanList",
            getLoanInsuranceInfoList: "infoQuery/getLoanInsuranceInfoList",
            getLoanCustomerInfo: "infoQuery/getLoanCustomerInfo",
            getLoanFeeInfoInfoQuery: "infoQuery/getLoanFeeInfo",
            getLoanAssetsInfo: "infoQuery/getLoanAssetsInfo",
            getLoanGuarantorInfo: "infoQuery/getLoanGuarantorInfo",
            getLoanApplyFlowList: "infoQuery/getLoanApplyFlowList",
            getGpsTrajectoryParam: "infoQuery/getGpsTrajectoryParam",
            getLoanCustomerContacter: "infoQuery/getLoanCustomerContacter",
            flowLoan: "flow/loan",
            getVinInfo:"loanApplyVinInfo/getNetReturnInfo",  //车架号查询
            getFLowVinRecordList:"loanApplyVinInfo/getFLowVinRecordList",//车辆报价历史查询记录
            customerRelationshipLIst: "customerRelationship/list",
            isCarFinance:"loanApply/isCarFinance",//判断是否总部审批中心人员
            customerRelationshipAdd: "customerRelationship/add",
            customerRelationshipGet: "customerRelationship/get",
            customerRelationshipDel: "customerRelationship/del",
            customerRelationshipAdd: "customerRelationship/add",
        },

    	postLoan: {
    		lawsuitList: "lawsuit/list",
    		courtApplyList: "loanOverdueInfo/loanOverdueAndProjectInfoList",
    		defendantList: "lawsuit/defendant/list",
    		defendantSelect: "lawsuit/defendant/selectList",
    		saveDefendantList: "lawsuit/save",
    		caseProcessGet: "lawsuit/get",
    		caseProcessInfo: "lawsuit/process/list",
    		saveCaseProcessLIst: "lawsuit/process/save",
    		historyCaseProcessList: "lawsuit/history/list",
    		savesNolPros: "lawsuit/nolPros/save",
    		nolPros: "lawsuit/nolPros/list",
    		saveImg: "lawsuit/process/upload",
    		getImg:"lawsuit/process/file/list",
    		//saveOpinion: "opinion/save",
    		delImg: "lawsuit/process/file/del",
    		updateCaseProcessLIst: "lawsuit/process/update",
    		preSubmit: "lawsuit/apply/process/preSubmit",
    		submit2next: "lawsuit/apply/process/submit2next",
    		back2pre: "lawsuit/apply/process/back2pre",
    		cancel: "lawsuit/apply/process/cancel",
    		preSubmitNolPros: "lawsuit/cancel/process/preSubmit",
    		submit2nextNolPros: "lawsuit/cancel/process/submit2next",
    		back2preNolPros: "lawsuit/cancel/process/back2pre",
    		cancelNolPros: "lawsuit/cancel/process/cancel",
            getLawsuitInfoList: "lawsuit/getLawsuitInfoList"
    		
    	},
        carDealer: {
            historyList:"carDealer/report/historyList",
            carStatusUpdate:"loanApply/customerCarStatus/update",
            dealerHistory:"carDealer/report/dealerHistory",
            eportList:"carDealer/rebate/reportList",
        	getDealerByGroup:"carDealer/rebate/dealerListByGroup",
        	reportParam:"carDealer/rebate/initParam",
        	modifyList:"carDealer/searchCarDealerModifyList",
            carDealerList:'carDealer/reportSelectList', //根据业务组选择合作车商
            loadGroupList:"carDealer/group/get",
            registration:"carDealer/registration/get",
            get: "carDealer/get",
            add: "carDealer/add",
            update: "carDealer/update",
            setStatus: "carDealer/setStatus",
            list: "carDealer/list",
            manager: "carDealer/manager/list",
            userList: "carDealer/manager/user/list",
            managerAdd: "carDealer/manager/add",
            managerSet: "carDealer/manager/setManager",
            accountList: "carDealer/account/list",
            accountAdd: "carDealer/account/add",
            accountDel: "carDealer/account/del",
            accountStop: "carDealer/account/setStatus",
            verifyAccountCanOper: "carDealer/verifyAccountCanOper",
            delete: "carDealer/del",
            fee: "carDealer/fee/list",
            feeGet: "carDealer/fee/get",
            feeAdd: "carDealer/fee/add",
            feeUpdate: "carDealer/fee/update",
            feeStop: "carDealer/fee/stop",
            feePromptMsg:"carDealer/fee/promptMsg",
            isManager: "carDealer/isManager",
            managerDel: "carDealer/manager/del",
            managerSetStatus: "carDealer/manager/setStatus",
            preSubmit: "carDealer/process/preSubmit",
            submit2next: "carDealer/process/submit2next",
            back2pre: "carDealer/process/back2pre",
            cancel: "carDealer/process/cancel",
            carDealerInit: "carDealer/init",
            carDealerPyGet: "carDealer/py/get",
            carOrderList: "car/order/list",
            carOrderGrabOrder: "car/order/grabOrder",
            carOrderBackOrder: "car/order/backOrder",
            carDealerFeeCopy: "carDealer/fee/copy",
            carDealerFeeDelete: "carDealer/fee/delete",
            //信息更正
            carDealerInfoCorrect: "carDealer/manager/syncGroup",
            carDealerBack2launch: "carDealer/process/back2launch",
            setDefault: "carDealer/account/setDefault",
            selectList: "carDealer/selectList",
            carDealerScore: "cardealer/grade/detail",
            carDealerScoreLatestSixMonth: "cardealer/grade/latestSixMonth",
            saveLoanScoreInfo: "loanApprovalInfo/saveLoanScoreInfo",
            getLoanApprovalInfo: "loanApprovalInfo/getLoanScoreItemInfo",
            getDealerGroup: "dealerGroup/all",
            rate:"carDealer/rate/list",
            rateUpdate:"/carDealer/rate/update",
            rateAdd:"/carDealer/rate/add",
        },
        insurance: {
            loanInsuranceList: "loanInsuranceInfo/loanInsuranceList",
            loanInsuranceInfoAdd: "loanInsuranceInfo/add",
            loanInsuranceTypeList: "loanInsuranceInfo/typeList",
            loanInsuranceInfoList: "loanInsuranceInfo/loanInsuranceInfoList",
            loanInsuranceInfoDel: "loanInsuranceInfo/delete",
            loanInsuranceInfoToUpdate: "loanInsuranceInfo/toUpdate",
            loanInsuranceInfoUpdate: "loanInsuranceInfo/update",
            getLoanInsuranceInfo: "infoQuery/getLoanInsuranceInfo",
            getLoanInsuranceInfoTypeList: "infoQuery/getLoanInsuranceInfoTypeList",
            //续保列表接口
            getRenewInsuranceList: "loanInsuranceRenewal/renewalProjectList",
            getRenewInsuranceListInfo: "loanInsuranceRenewal/list",
            getRenewInsuranceListPhone: "loanInsuranceRenewal/listPhone",
            //删除记录
            delInsuranceRenew: "loanInsuranceRenewal/delete",
            delInsuranceRenewPhone: "loanInsuranceRenewal/deletePhone",
            //修改记录
            modifyInsuranceRenew: "loanInsuranceRenewal/update",
            modifyInsuranceRenewPhone: "loanInsuranceRenewal/updatePhone",
            //添加记录
            addInsuranceRenew: "loanInsuranceRenewal/add",
            addInsuranceRenewPhone: "loanInsuranceRenewal/addPhone",
            //获取记录
            getInsuranceRenew: "loanInsuranceRenewal/toUpdate",
            getInsuranceRenewPhone: "loanInsuranceRenewal/toUpdatePhone",
            //获取图片列表
            getInsuranceRenewImags: "loanApprovalInfo/getApprovalDocument",
            //获取联系信息
            getCOntact: "loanInsuranceRenewal/getSpouseInfo",
            //保险核销
            loanInsuranceRenewalInfoCavList: "loanInsuranceRenewal/loanInsuranceRenewalInfoCavList",
            //核销导出
            loanInsuranceRenewalInfoCavListExport: "loanInsuranceRenewal/loanInsuranceRenewalInfoCavListExport",
            updateCavStatus: "loanInsuranceRenewal/updateCavStatus",
            updateCavStatus2: "loanInsuranceRenewal/updateCavStatus2",
            renewalProjectListExport: "loanInsuranceRenewal/renewalProjectListExport"
        },
        asset: {
            //loanAssetPackageList: "loanAssetPackage/list",
            loanAssetPackageSave: "loanAssetPackage/save",
            loanAssetPackageDel: "loanAssetPackage/del",
            loanAssetPackageGet: "loanAssetPackage/get",
            loanAssetList: "loanAssetPackageManage/addAssets/list",
            loanAssetAdd: "loanAssetPackageManage/addAssets/add",
            loanAssetDel: "loanAssetPackageManage/delAssets",
            lockAssetsPackage: "loanAssetPackageManage/lockAssetsPackage",
            getInAssetsPackage: "loanAssetPackageManage/getListInAssetsPackage",
            getLoanApproveProject: "loanAssetPackageManage/getLoanApproveProject",
            getLoanApproveCustomer: "loanAssetPackageManage/getLoanApproveCustomer",
            getAssetPackageNo: "loanAssetPackage/getAssetPackageNo",
            loanAssetPackageManage: "loanAssetPackage/manage/list",
            loanAssetPackage: "loanAssetPackage/search/list",
            export: "loanAssetPackageManage/export"
        },
        second: {
            estimateSearch: "estimate/search",
            serial: "estimate/serial",
            add: "estimate/add",
            preSubmit: "estimate/process/preSubmit",
            submit2next: "estimate/process/submit2next",
            cancel: "estimate/process/cancel",
            closed: "estimate/process/close",
            get: "estimate/get",
            save: "opinion/save",
            save1th: "estimate/save1th",
            save2th: "estimate/save2th",
            back2pre: "estimate/process/back2pre",
            transferBack2pre: "transfer/process/back2pre",
            not_yet: "transfer/search/not_yet",
            already: "transfer/search/already",
            saves: "transfer/save",
            transferPreSubmit: "transfer/process/preSubmit",
            transferSubmit2next: "transfer/process/submit2next",
            update: "estimate/update",
            opinionLast: "estimate/opinion/last",
            userList: "user/list",
            cancelEvaluation:"estimate/cancel"
        },
        messageBoardManage: {
            myQuestionList: "clsFeedbackManage/myQuestionList",
            clsFeedbackManageAdd: "clsFeedbackManage/add",
            feedbackDetail: "clsFeedbackManage/feedbackDetail",
            myFeedbackReply: "clsFeedbackManage/myFeedbackReply"
        },
        contractPrint:{
        	init : "contractPrint/process/init",
        	preSubmit: "contractPrint/process/preSubmit",
        	submit2next: "contractPrint/process/submit2next",
        	cancel: "contractPrint/process/cancel"
        },
        documentManagement: {
        	pushToBank:"loanData/push",
        	contractPrintList:"deliver/getContractPrintList",
            deliverList: "deliver/list",
            sendCompanyList: "deliver/company/list",
            hasSendCompanyList: "deliver/company/sendList",
            sendOfficeList: "deliver/office/list",
            hasSendOfficeList: "deliver/office/sendList",
            sendBankList: "deliver/bank/list",
            hasSendBankList: "deliver/bank/sendList",
            expressList: "deliver/bill/detail",
            addExpress: "deliver/bill/add",
            saveExpress: "deliver/bill/save",
            delExpress: "deliver/bill/del",
            recipientOfficeList: "deliver/office/recipientList",
            recipientBankList: "deliver/bank/recipientList",
            recipientCompanyList: "deliver/company/recipientList",
            getExpress: "deliver/bill/get",
            recipient: "deliver/recipient/do",
            recipientTemp: "deliver/recipient/temp",
            recipientCancel: "deliver/recipient/cancel",
            submit2next: "deliver/process/submit2next",
            deliverGet: "deliver/get",
            deliverStart: "deliver/start",
            deliverSave: "deliver/save",
            preSubmit: "deliver/process/preSubmit",
            cancel: "deliver/process/cancel",
            getApprovalProjectInfo: "infoQuery/getApprovalProjectInfo",
            deliverGetApprovalProjectInfo: "deliver/getApprovalProjectInfo",
            getLoanContractInfo: "infoQuery/getLoanContractInfo",
            back2pre: "deliver/process/back2pre",
            saveCar: "licensePlateInfoVo/saveCar",
            documentOpinionLast: "opinion/last",
            getDataAuditing: "deliver/getApprovalBaseInfo",
            saveCustomerInfo: "deliver/editLoanerInfo",
            cancelDeliver: "deliver/cancel",
            pigeonholeList: "deliver/pigeonholeList",
            pigeonhole: "deliver/pigeonhole", //确认归档
            prePigeonhole: "deliver/prePigeonhole"  //预归档
        },
        document:{
          documentList:"document/list",
          documentSave:"document/save"
        },
        creditManagement: {
            licensePlateInfoVo: "licensePlateInfoVo/list",
            licenseAdd: "licensePlateInfoVo/save",
            licenseGet: "licensePlateInfoVo/get",
            mortageList: "pledgeInfo/list",
            mortageSave: "pledgeInfo/save",
            mortageGgt: "pledgeInfo/get",
            loanContractList: "loanContractInfo/list",
            loanContractSave: "loanContractInfo/save",
            loanContractGet: "loanContractInfo/get",
            loanContractEdit: "loanContractInfo/edit",
            loanContracPlanList: "loanContractInfo/plan/preList",
            bankList: "bankRemittanceInfo/list",
            bankInfoGet: "bankRemittanceInfo/get",
            bankInfoSave: "bankRemittanceInfo/save",
            bankCancel: "bankRemittanceInfo/cancel",
            getBankPayAmt:"bankRemittanceInfo/getTotalPayAmt",
            exportExcel:"bankRemittanceInfo/export",
            repayCardList: "repaymentCardInfo/list",
            repayCardExport: "repaymentCardInfo/listExport",
            repayCardGet: "repaymentCardInfo/get",
            repayCardSave: "repaymentCardInfo/save",
            failRecordList: "licensePlateInfoVo/failRecordList",
            pledgeInfoFailRecordList: "pledgeInfo/failRecordList",
            pledgeInfoModifyPledgeInfo:'pledgeInfo/searchPledgeModifyList',
            pledgeFeedbackRecordList:"pledgeInfo/feedbackRecordList",
            isValid: "pageFieldValidConfig/isValid",
            tmpSave: "loanContractInfo/tmpSave"
        },
        loanCancel: {
            backSelectUser:"loan/cancel/process/webBackSelectUserList",
            cancel: "loan/cancel/process/cancel",
            preSubmit: "loan/cancel/process/preSubmit",
            submit2next: "loan/cancel/process/submit2next",
            close: "loan/cancel/process/close",
            preBack:"loan/cancel/process/preBack",
            back2pre: "loan/cancel/process/back2pre"
        },
        loanModify: {
        	backSelectUser:"loan/modify/process/webBackSelectUserList",
            cancel: "loan/modify/process/cancel",
            preSubmit: "loan/modify/process/preSubmit",
            submit2next: "loan/modify/process/submit2next",
            close: "loan/modify/process/close",
            preBack: "loan/modify/process/preBack",
            back2pre: "loan/modify/process/back2pre",
            preBack2BudgetOfficeStaff: "loan/modify/process/preBack2BudgetOfficeStaff",
            back2BudgetOfficeStaff: "loan/modify/process/back2BudgetOfficeStaff",
            getLoamModifyHistory: "loanModify/getLoamModifyHistory",
            getLoanRefundPayeeMethod: "loan/payment/getLoanRefundPayeeMethod",
            loanToBeInvalid: "loan/modify/process/toBeInvalid"
        },
        loanChange: {
            getLoanRefundFull: "loan/payment/getLoanRefundFull",
            getLoanRefundBalance: "loan/payment/getLoanRefundBalance",
            saveLoanRefundFull: "loan/payment/saveLoanRefundFull", //全额保存
            saveLoanRefundBalance: "loan/payment/saveLoanRefundBalance" //差额保存
        },
        report: {
            reportAuthCheck:'report/reportAuth/check',
            overdueDaily:"overdue/report/daily",
            overdueDetail:'report/overdueReport/detail',
            overdueSimple:'report/overdueReport/simple',
            overdueRate:'report/overdueReport/overdueReportProp',
            overdueDailyExport:"overdue/report/dailyExport",
            overdueMonthly:"overdue/report/monthly",
            overdueMonthlyExport:"overdue/report/monthlyExport",
        	//账户余额管理
        	accList:"accountBalance/getList",
        	detailList:"accountBalance/getDetailList",
        	save:"accountBalance/saveDetail",
        	register:"accountBalance/balanceRegister",
        	exportExl:"accountBalance/exportExcel",
        	
            bankSummary:'report/bank/summary', //银行放款统计表
            bankDetail: 'report/bank/detail', //银行放款详情表
            orgList: 'org/list',
            recipientList:'deliver/list/aboveBankOffice',//收发件的收件机构

            creditEff: 'report/credit/efficiency', //征信统计表饼图
            creditDetail: 'report/credit/detail', //征信统计表详情
            creditSummary: 'report/credit/summary', //征信统计表简版

            businessTimeDetail:'report/businessTime/detail', //业务时间表详情
            detailsReport:'report/businessTime/detailsReport',//业务时间表详情new
            businessTimeSummary:'report/businessTime/summary', //业务时间统计表

        	overall:"report/overall",
        	ring:"report/chart/ring",
        	line:"report/chart/line",
        	statistics:"report/statistics",
        	eptExcle:"report/export",
        	loanAndPay:"report/list",
        	parApprovalList:"payApply/list",
        	payApprovalQueryList:"payApply/query/list",
        	payApplyUnbindingList:"payApply/unbinding/list",
        	payApplyUnbindingMatchList:"/payApply/unbinding/match/",
        	associatePayApply2Project : "/payApply/bind",
        	getAssociatePayApply : "/payApply/associated/",
        	payApprovalDelete:"payApply/delete",
        	payApprovalPrint:"payApply/print",
        	payApprovalSave:"payApply/save",
        	payApprovalUpdate:"payApply/update",
            businessQuery: system[0] + "query/business",
            queryBusinessStatis:system[0]+"query/businessStatis",
            feeQuery: system[0] + "query/fee",
            statisticByMonth: system[0] + "query/statisticByMonth",
            unPledgeStatistic: system[0] + "query/unPledgeStatistic",
            flowStatusStatistic: system[0] + "query/flowStatusStatistic",
            dealerCompanystatistic: system[0] + "query/dealerCompanystatistic",
            loanSignStatistic: system[0] + "query/loanSignStatistic",
            bankPayStatistic: system[0] + "query/bankPayStatistic",
            loanAmmountRotaryStatistic: system[0] + "query/loanAmmountRotaryStatistic",
            statisticRankWithSign: system[0] + "query/statisticRankWithSign",
            unPledgeRank: system[0] + "query/unPledgeRank",
            loanSignRank: system[0] + "query/loanSignRank",
            bankPayRank: system[0] + "query/bankPayRank",
            loanAmmountRotaryRank: system[0] + "query/loanAmmountRotaryRank",
            loanSignStatisticByArea: system[0] + "query/loanSignStatisticByArea",
            loanSignStatisticWithRecentPeriodByArea: system[0] + "query/loanSignStatisticWithRecentPeriodByArea",
            //报表接口
            carDealerInfoReportList: system[0] + "carDealerInfoReport/list",
            customerNumtatistic: system[0] + "query/customerNumtatistic",
            businessObjectProcessInfoReportList: system[0] + "businessObjectProcessInfoReport/list",
            businessExport: system[0] + "query/businessExport",
            businessObjectProcessInfoReportListExport: system[0] + "businessObjectProcessInfoReport/listExport",
            businessObjectProcessInfoReportLlistDetailExport:system[0]+"businessObjectProcessInfoReport/listDetailExport",
            queryStatisCustomerNum:system[0]+"query/statisCustomerNum",
            businessObjectProcessInfoReportListStatis:system[0]+"businessObjectProcessInfoReport/listStatis",
            carDealerInfoReportListStatis:system[0]+"carDealerInfoReport/listStatis",
            secondHandCarInfoReportList: system[0]+"secondHandCarInfoReport/list",
            statisBankPayment: system[0]+"query/statisBankPayment",
            statisBankPaymentExport: system[0]+"query/statisBankPaymentExport",
            statisLoanCompanyBusiness: system[0]+"query/statisLoanCompanyBusiness",
            statisLoanCompanyBusinessExport: system[0]+"query/statisLoanCompanyBusinessExport"

        },
        export: {
            getBank: "cooperation/bank/all",
            searchList: "loan/payment/loanApprovePaymentExportlist",
            getTotal: "loan/payment/countLoanApprovePaymentExport",
            exportExcel: "loan/payment/exportLoanApprovePaymentExport",
            getGuarantee: "cooperation/guarantee/all",
            exportLicensePlateInfo:"licensePlateInfoVo/export",
            exportPledgeInfo:"pledgeInfo/export"
        },
        personal: {
            modifyPWD: "updPassWord"
        },
        flowControl: {
            getFlow: "flow/get",
            getNode: "flow/nodes",
            searchFlow: "rule/search",
            flowEnable: "rule/enable",
            flowDisable: "rule/disable",
            flowModify: "rule/update",
            flowDel: "rule/delete",
            flowSee: "rule/get",
            flowAdd: "rule/add",
            flowUpdate: "rule/updte",
            operator: "biz/user/list",
            operatorNew: "biz/userList"
        },
        printContract: {
            getList: "loanTemplateManage/loanTemplateList",
            getModalCode: "loanTemplateManage/loanTemplateContentList"
        },
        feeManage: {
        	  list: "feeManage/list",
              save: "feeManage/save",
              get: "feeManage/get",
              exportExcel:"feeManage/viewExport",
              feeCategoryList: 'feeManage/feeCategoryList',
              recycleFeeCategoryList: 'feeManage/recycleFeeCategoryList',
              feeList: 'feeManage/feeList',
              feeReasonList: 'feeManage/feeReasonList',
              feeBalanceList: 'feeManage/feeBalanceList',
              feeManageNotice: "feeManage/notice",
              applyPreSubmit: 'fee/apply/process/preSubmit',
              recyclePreSubmit:'fee/recycle/process/preSubmit',
              recyclePreBack:"fee/recycle/process/preBack",
              recycleback2pre:"fee/recycle/process/back2pre",
              applySubmit2next: 'fee/apply/process/submit2next',
              applyPreBack: 'fee/apply/process/preBack',
              applyBack2pre: 'fee/apply/process/back2pre',
              recycleSubmit2next: 'fee/recycle/process/submit2next',
              feeManageImgUploadFile:"feeManage/uploadFile",
              feeManageImgDelFile:"feeManage/delFile",
              feeManageImgGetFileList: "feeManage/getFileList",
              recycleCancel:"fee/recycle/process/cancel",
              recycleClose:"fee/recycle/process/close",
              applyCancel: 'fee/apply/process/cancel',
              applyClose: 'fee/apply/process/close',
        	feeMatchByProjectIds: "advanceFee/getOverdueCustomer",
        	collectionList: 'loanOverdueInfo/loanOverdueAndProjectInfoList',
            feeManageAdvanceList:"advanceFee/getApplyList",
            advanceFeeSave:"advanceFee/save",
            feeApplyPreLongTop:"fee/apply/process/preLongTop",
            feeApplySubmit2LongTop:"fee/apply/process/submit2LongTop",
            preLongTop:"advanceFeeApply/process/preLongTop",
            preSubmit:"advanceFeeApply/process/preSubmit",
            submit2LongTop:"advanceFeeApply/process/submit2LongTop",
            submit2next:"advanceFeeApply/process/submit2next",
            preBack:"advanceFeeApply/process/preBack",
            back2pre:"advanceFeeApply/process/back2pre",
            cancel:"advanceFeeApply/process/cancel",
            close:"advanceFeeApply/process/close",
            feeView:"advanceFee/getApplyDetail",
            feeImgUploadFile:"advanceFee/uploadFile",
            feeImgDelFile:"advanceFee/delFile",
            feeImgGetFileList: "advanceFee/getFileList",
            feeDetailExport:"advanceFee/viewExport",
            orgList:"advanceFee/getOrgList",
            	
            detailReport:"feeManage/report/detail",
            summaryReport:"feeManage/report/summary"	

            
        },
      //抵押物占管
        collateral: {
            getApproveNames:"carcheckout/getApproveNames",
            getList: "carcheckout/list",
            shippingApply: "carcheckout/add",
            shippingApplySave: "carcheckout/save",
            collateralRecord: "carcheckout/getpipe",
            preSubmit: "carcheckout/process/preSubmit",
            submit2next: "carcheckout/process/submit2next",
            preBack: "carcheckout/process/preBack",
            back2pre: "carcheckout/process/back2pre",
            cancel: "carcheckout/process/cancel"
        },
        //拖车管理
        trailer: {
            getList: "dragCar/list",
            trailerApply: "dragCar/add",
            getTrailerRecord: "dragCar/queryDragCar",
            trailerRecord: "dragCar/update",
            picLoad: "dragCar/upload",
            picLoadVideo: "/dragCar/uploadvideo",
            picDel: "dragCar/deleUploadFile",
            getPic: "dragCar/queryUploadFile",
            getPicVideo: "dragCar/queryUploadFileVideo",
            getDragCarPeople: "dragCar/dragCarPeople",
            getFlowInfo: "dragCar/getDragCarById",
            preSubmit: "tow/car/process/preSubmit",
            submit2next: "tow/car/process/submit2next",
            preBack:"tow/car/process/preBack",
            back2pre: "tow/car/process/back2pre",
            cancel: "tow/car/process/cancel",
            getDragAndCheckoutCar: "dragCar/getDragAndCheckoutCar"
        },
        //待打款列表
        finance: {
            getList: 'finance/paymentapplication/list',
            systempay: 'finance/paymentapplication/systempay',
            manpay: 'finance/paymentapplication/manpay',
            cancelpay: 'finance/paymentapplication/cancelpay',
            exportcustomer: 'finance/paymentapplication/exportcustomer',
            printbudget: 'finance/paymentapplication/printbudget',
            returnfund: 'finance/paymentapplication/returnfund',
            batchExportcustomer: 'finance/paymentapplication/exportcustomer/batch',
            batchManpay: 'finance/paymentapplication/manpay/batch',
            batchSystempay: 'finance/paymentapplication/systempay/batch',
            getCapatilPoolAccountList: 'cooperation/getCapatilPoolAccountList',
            guaranteeList: 'cooperation/guarantee/list',
            receiptList: 'finance/receipt/list',
            guaranteeList: 'cooperation/guarantee/list',
            guaranteeList: 'cooperation/guarantee/list',
            receiptList:"finance/receipt/list",
            receiptAmount:"finance/receipt/amount",
            //待打印预算单列表
            printapplicationList:"finance/printapplication/list",
            receiptPrint:"finance/receipt/print",
            getPuttedLoanList: "infoQuery/getPuttedLoanList",
            exportPuttedLoanList: "infoQuery/exportPuttedLoanList"
        },
        //数据看板
        dataView: {
            companyinfoList: 'ao/companyinfo/list',
            companyinfoGet: 'ao/companyinfo/get',
            loaninfoGet: 'loaninfo/getByProvince',
            loaninfoGetByStype: 'loaninfo/getByStype',
            distributionAmount: 'loaninfo/distribution/amount',
            distributionBusiness: 'loaninfo/distribution/business',
            loaninfoGetTop10: 'loaninfo/getTop10',
            settingsAll: 'backend/settings/all',
            generalUpdate: 'backend/settings/general/update',
            dataUpdate: 'backend/settings/data/update',
            overduepledgeGet: 'overdue/pledge/getByProvince',
            pledgeGetTop10: 'overdue/pledge/getTop10',
            pledgeGetAll: 'overdue/pledge/getAll',
            businessGetTop10: 'business/getTop10',
            insuranceGetAll: 'business/insurance/getAll',
            insuranceGetByStype: 'business/insurance/getByStype',
            creditcardGetAllByType: 'business/creditcard/getAllByType',
            creditcardGetByCategory: 'business/creditcard/getByCategory'
        },
        //保险分发（中安）
        distributionInsurance: {
            insureList: 'loanInsuranceIsSue/list0', //待分发
            isSue: 'loanInsuranceIsSue/update',
            insuranceList: 'loanInsuranceIsSue/list1'  //已分发
        },
        //保险分发（公司）
        distributionInsuranceCo: {
            insureCheck: 'loanInsuranceIsSue/insureCheck',
            insureSubmit: 'loanInsuranceIsSue/insureSubmit',
            export: 'loanInsuranceIsSue/export',
            export2: 'loanInsuranceIsSue/export2Selected',
            isSue: 'loanInsuranceIsSue/updatePolicyNumber',
            getInsure: "loanInsuranceIsSue/get",
            saveAll: 'loanInsuranceIsSue/add',
            preSubmit: "insurance/dispatch/process/preSubmit",
            submit2next: "insurance/dispatch/process/submit2next",
            cancel: "insurance/dispatch/process/cancel",
            back2pre: "insurance/dispatch/process/back2pre",
            exportCheck: "loanInsuranceIsSue/exportCheck",
            sendExport:"loanInsuranceIsSue/exportDispatch"//已分发导出
        },
        //贴息政策管理
        discountManage: {
            discountPolicySearch: "discount/policy/search",
            discountHostFacSelectList: "discount/policy/hostFacSelectList",
            discountPolicyCopy: "discount/policy/copy",
            discountPolicyDel: "discount/policy/del",
            discountPolicyChangeStatus: "discount/policy/changeStatus",
            discountPolicyBaseInfo: "discount/policy/show",
            discountBaseInfoSave: "discount/base/save",
            discountCarDealerList: "discount/carDealer/list",
            discountCarDealerImport: "discount/carDealer/import",
            discountCarDealerDownload: "discount/carDealer/download",
            discountCarDealerAdd: "discount/carDealer/add",
            discountCarDealerDel: "discount/carDealer/del",
            discountCarDealerChangeStatus: "discount/carDealer/changeStatus",
            discountCarDealerUpdate: "discount/carDealer/update",
            discountSchemeList: "discount/scheme/list",
            discountSchemeDel: "discount/scheme/del",
            discountSchemeCopy: "discount/scheme/copy",
            discountSchemeSetStatus: "discount/scheme/setStatus",
            discountSchemeSave: "discount/scheme/save",
            discountSchemeGet: "discount/scheme/get"
        },
        discountPolicy: {
            discountLoanGetBrand: "discount/loan/get2",
            discountLoanGetMake: "discount/loan/get3",
            discountLoanGetModel: "discount/loan/get4",
            discountLoanGetPolicy: "discount/loan/get5",
            discountLoanGetScheme: "discount/loan/get6",
            discountLoanGetCarDealer: "discount/loan/get7",
            discountLoanGetPolicy1: "discount/loan/get8"
        },
        //空白合同管理
        blankContract:{
            ledgerManage:"contract/blank/list",
            logs:"contract/logs/list",
            printStatus:"contract/print/status",
            receive:"contract/receive/getContracts",
            getContractsItems:"contract/receive/getContractsItems",
            unReceive:"contract/receive/unReceiveContractsItem",
            receiveContracts:"contract/receive/receiveContracts",
            cancelReceive:"contract/receive/cancelReceiveContracts",
            stock:"contract/stock",
            serialNumber:"contract/serialNumber",
            groupList:"contract/business/group/list",
            recipient:"contract/recipient/list",
            getContrctReceiveItem:"contract/contractReceive/getContrctReceiveItem",
            get:"contract/contractReceive/get",
            deleteContractsReceive:"contract/deleteContractsReceive",
            deleteContractsReceiveItem:"contract/deleteContractsReceiveItem",
            repertory:"contract/repertory/recipients",
            update:"contract/updateContractsReceive",
            userList:"user/list"
        },
        overdueWaringManage:{
            bankOverdueDateList:"loanOverdueRecord/dateListInit",
            bankOverdueList:"loanOverdueRecord/bankOverdueList",
            overdueList: "loanOverdueRecord/overdueList",
            overdueListExport: "loanOverdueRecord/overdueListExport"
        },
        escrowaccount:{
        	list:"escrowaccount/list",
        	addEscrowAccount:"escrowaccount/eacompany/add",
        	deleteEscrowAccount:"escrowaccount/delete",
        	dealerEscrowAccountAndDealerList:"escrowaccount/escrowaccountdealer/get",
        	getEscrowAccountAndDealerList:"escrowaccount/getescrowaccountdealer/List",
        	updateEscrowAccountAndCompany:"escrowaccount/eacomapy/update",
        	deleteEscrowAccountAndDealer:"escrowaccount/dealerescrowaccount/delete",
        	getAllBusinessGroups:"escrowaccount/getallbusinessgroups/List",
        	getCarDealerInfo:"escrowaccount/getcardealerinfo/List",
        	addEscrowAccountAndDealer:"escrowaccount/eadealer/add",
        	judgeEscrowAccountAndCompany:"escrowaccount/escrowaccountdealer/judge",
        	judgeEscrowAccountAndDealer:"escrowaccount/dealer/judge"
        },
        collectionManage:{
            collectionList:"loanOverdueInfo/collectionList",
            loanCollectionInfoGet:"loanCollectionInfo/get",
            getCollectionObjList:"loanCollectionInfo/getCollectionObjList",
            loanCollectionInfoSave:"loanCollectionInfo/save",
            loanCollectionInfoList:"loanCollectionInfo/viewList",
            overdueList:"loanCollectionInfo/overdueList",
            collectionUserList:"loanCollectionInfo/collectionUserList",
            collectionStat: "loanOverdueInfo/collectionStat",
            collectionListExport: "loanOverdueInfo/collectionListExport",
            loanOverdueInfoPrint: "loanOverdueInfo/loanOverdueInfoPrint",
            otherPeopleList: "loanCollectionInfo/otherPeopleList",
            getPostLoanFileList: "postLoanFileInfo/getFileList",
            collectionNotice: "loanOverdueInfo/notice",
            newCollectionUserList: "loanCollectionInfo/newCollectionUserList",
            allotUpdate: "loanOverdueInfo/update",
            allotCancel: "loanOverdueInfo/cancel",
            listAll: "loanCollectionInfo/list"
        },
        SettlementRegistration: {
        	print:"settlement/print",
            SettlementUrl:"settlement/getLoanSettlementList",
            basicInformation:"settlement/get",//结清处理基本信息
            settlementQuery:"settlement/query",
            imgUpload:"settlement/file/upload",//图片上传
            save:"settlement/save",//保存结清信息
            imgDelete:"settlement/file/del",//图片删除接口
            preSubmit:"loan/clear/process/preSubmit",
            preLongTop:"loan/clear/process/preLongTop",
            submit2next:"loan/clear/process/submit2next",
            submit2LongTop:"loan/clear/process/submit2LongTop",
            cancel:"loan/clear/process/cancel",
            close:"loan/clear/process/close",
            back2pre:"loan/clear/process/back2pre",
            complete:"loan/clear/process/complete",
            // 保单列表
            baoDan:"loanInsuranceRenewal/list",
            listPhone:"loanInsuranceRenewal/listPhone",
            notice: "settlement/notice",
            getGroupList:"settlement/getGroupList"
        },
        appprove: {
            'approveDetail': 'approve/detail',
            'approveSummary': 'report/approve/summary'
        },
        RepaymentHistory:{
            RepaymentHistoryList:"loanOverdueContractRepayPlan/list"
        },
        // 费用收支情况
        sz:{
            list:"feeManage/feeBalanceList"
        },
        support:{
        	getWhiteListConfig:"support/config/packLoanConfig/getWhiteListConfig",
            deleteWhiteListConfig:"support/config/packLoanConfig/deleteWhiteListConfig",
            addWhiteListConfig:"support/config/packLoanConfig/addWhiteListConfig"

        },
        Contact:{
        	contactsTemplate:"contactsTemplate/print"
        }
    };

//判断值是否改变,用法:在input上增加data-check="_字段名;提示信息",在获取旧值的接口里保存window[_字段名]的值,同一window内字段名不重复
$(document).on('blur', "[data-check]", function () {
    var check = $(this).data("check"),
        _key = check.split(";", 2)[0],
        _tip = check.split(";", 2)[1];
    var newValue = $(this).val();
    if (newValue !== "" && newValue !== window[_key]) {
        tip({
            content: _tip
        })
    }
});

zeroMoney = function (value, row, index) {
	if(!value){
		return "0";
	}else{
		return value;
	}
}

overdueAmtRate = function (value, row, index) {
    if(row.overdueAmtRate){
        if(row.overdueAmtRate<0){
            value = "--";
        }
        else if (row.overdueAmtRate < 1.5 && row.overdueAmtRate>0 ) {
            value = "N1";
        } else if (row.overdueAmtRate < 3 && row.overdueAmtRate>=1.5 ) {
            value = "N2";
        } else if (row.overdueAmtRate>=3) {
            value = "N"+Math.floor(row.overdueAmtRate);
        }
    }else{
        if (row.overdueAmtRate == 0) {
            value = "N0";
        }
    }
    return value;
}


//枚举
statuss = function (value, row, index) {
    if (typeof value === "string") {
        value = parseInt(value);
    }
    return (value === 1 && "未生效") || (value === 2 && "已生效") || (value === -1 && "已删除") || "";
};

cardType = function (value, row, index) {
    return [null, "身份证", "军官证", "侨胞证", "外籍人士", ""][value] || null;
};
relationship_contacts = function (value, row, index) {
    return [null, "本人", "夫妻", "父亲", "母亲",  "姐妹","兄弟", "儿子", "亲戚", "朋友", "合伙人", "同事", "女儿", "姐夫", "嫂子", "儿媳", "担保人","反担保人"][value] || null;
};
isAdvanceDiscount = function (value, row, index) {
    return [null, "是", "否"][value] || null;
};
collectionType = function (value, row, index){
    return [null, "电话催收", "上门催收"][value] || null;
};
continuousOverdueTimes = function (value, row, index){
    if (value == undefined) {
        return "--";
    }
    var arr=[null];
    for(var i= 0;i<=36;i++){
        var n="";
        if(i<=4){
            n="N"+i+"<span class='N"+i+"'></span>";
        }else{
            n="N"+i+"<span class='N4'></span>";
        }
        arr[i]=n;
    }
    return arr[value] || null;
};
collectionResult = function (value, row, index){
    return [null, "愿意还款", "不愿还款"][value] || null;
};
//贷后-诉讼管理 - 案件状态
lawsuitStatus = function (value, row, index) {
	return [null, "起诉审批中", "起诉审批中", "起诉申请通过", "撤诉申请中", "撤诉审批中", "撤诉申请通过", "已立案", "已开庭(传票)", "已判决", "执行中", "执行终结", "恢复执行中", "执行完毕", "已撤诉", "达成调解"][value] || null;
}

lawsuitType = function (value, row, index) {
    return [null, "公司起诉", "银行起诉"][value] || null;
}
moneyFixedTwo=function(value, row, index){
	if(typeof(value)=='undefined'){
		return null;
	}else{
		if(value==0){
			return '0.00';
		}else{
			return value.toFixed(2);
		}	
	}
}
yuan = function (value, row, index) {
    return value ? (value + "元") : null;
};
qi = function (value, row, index) {
    return value ? (value + "期") : null;
};
ci = function (value, row, index) {
    return value ? (value + "次") : null;
};
current_yuan = function (value, row, index) {
    if (row.LastOverdueTotalAmount && row.LastOverdueTotalAmount) {
        var current = comn.accSub(parseFloat(row.overdueTotalAmount), parseFloat(row.LastOverdueTotalAmount));
        return current + "元";
    } else {
        return "--";
    }
}
resultStatus = function (value, row, index) {
    return [null, "未处理", "关闭", "退回", "发起征信", "已分配"][value] || null;
};

managementType = function (value, row, index) {
    return [null, "管理权", "业务权"][value] || null;
};
guaranteeType = function (value, row, index) {
    return [null, "抵押"][value] || null;
};

currencyType = function (value, row, index) {
    return [null, "抵押"][value] || null;
};
insuranceState = function (value, row, index) {
    return ["待投保", "投保中", "已投保"][value] || null;
}
estimateStatus = function (value, row, index) {
    return ["评估发起", "初评中", "初评完成", "复评中", "复评完成"][value] || null;
};

relationship = function (value, row, index) {
    return [null, "本人", "夫妻", "父亲", "母亲", "姐妹", "兄弟", "儿子", "亲戚", "朋友", "合伙人", "同事", "女儿", "姐夫", "嫂子", "儿媳"][value] || null;
};

relationshipWithLoaner = function (value, row, index) {
    return [null, "父母", "兄弟姐妹", "子女", "同事", "同学", "朋友"][value] || null;
};

isNo = function (value, row, index) {
    return [null, "是", "否"][value] || null;
};

financialType = function (value, row, index) {
    return [null, "征信中", "征信通过", "未通过", "失效"][value] || null;
};

creditStatus = function (value, row, index) {
    return [null, "已征信", "未征信"][value] || null;
};

businessBreed = function (value, row, index) {
    return [null, "信用卡贷款", "银行直销-非垫款", "个人消费贷款"][value] || null;
};

level = function (value, row, index) {
    return [null, "一般", "紧急"][value] || null;
};

loanTerm = function (value, row, index) {
    return [null, "12期", "18期", "24期", "36期"][value] || null;
};

costType = function (value, row, index) {
    return [null, "公司", "车行", "客户"][value] || null;
};

number = function (value, row, index) {
    return ["元", "1", "2", "3"][value] || null;
};

feeType = function (value, row, index) {
    return [null, "无", "保险手续费", "补收印花税", "抵押押金（非现金）", "短期保费", "公证费（非现金)", "其他费用", "银行中介费（现金）", "银行手续费", "调查费"][value] || null;
};

deliveryMethod = function (value, row, index) {
    return [null, "现金", "非现金"][value] || null;
};

accountType = function (value, row, index) {
    return [null, "对公账户", "个人账户"][value] || null;
};

sex = function (value, row, index) {
    return ["女", "男"][value] || null;
};

maritalStatus = function (value, row, index) {
    return [null, "已婚", "未婚", "离异", "丧偶"][value] || null;
};

settleMethod = function (value, row, index) {
    return [null, "车行结算", "个人结算", "无需结算"][value] || null;
};

loanStatus = function (value, row, index) {
    return [null, "贷款拒绝", "审批通过", "贷款审核", "贷款发起", "贷款作废"][value] || null;
};

loanStatusQuery = function (value, row, index) {
    return [null, "业务办理中", "分公司审批中", "总部审批中", "审批通过", "审批否决", "贷款作废", "分公司请款中", "已付款未放款", "已付款已放款", "贷款修改中", "贷款作废中", "贷款结清", "收款中", "已收款", "未付款已放款"][value] || null;
};

deliverType = function (value, row, index) {
    return [null, "快递", "客户自取", "客户经理代送", "其他"][value] || null;
};

assetType = function (value, row, index) {
    return [null, "汽车", "房产", "地产", "银行存款", "其他", "机器设备类", "设施类在建工程", "有价证券", "保证金"][value] || null;
};

loanInfoYears = function (value, row, index) {
    return [null, "12个月", "18个月", "24个月", "36个月"][value] || null;
};

failReason = function (value, row, index) {
    return [null, "要示本人到场", "资料不齐全", "拍牌", "其他"][value] || null;
};

guarantyRelationship = function (value, row, index) {
    return [null, "担保人", "反担保人"][value] || null;
};

loanCarType = function (value, row, index) {
    return [null, "新车", "二手车"][value] || null;
};

carDealerType = function (value, row, index) {
    return [null, "经销商", "推荐商"][value] || null;
};

//节点分流操作状态枚举
flow_status = function (value, row, index) {
    return ["停用", "启用"][value] || null;
};
//导出状态判断
export_Status = function (value, row, index) {
    return [null, "未导出", "已导出"][value] || null;
};
//导出状态判断
exportStatus = function (value, row, index) {
    return [null, "已导出", "未导出"][value] || null;
}
yuan = function (value, row, index) {
    if (value) {
        return value + "元";
    } else {
        return null;
    }
};
feeStatus =function(value, row, index){
    if(row.isIncome == 1){
        return [null, "待提交", "审批中", "审批通过", "已付款","已关闭"][value] || null;
    }else{
        return [null, "待提交", "审批中", "审批通过", "已收款","已关闭"][value] || null;
    }
};
isIncome = function (value, row, index) {
    return [null, "支", "收"][value] || null;
}

dragStatus = function (value, row, index) {
    return ['拖车审批中',"待拖车","已入库", "已撤销","出库审批中","已出库"][value] || null;
}

checkoutReason = function (value, row, index) {
    return [null, '全额结清垫款本息及银行垫款', '结清当前垫款本息及银行月供', '公司处置', '法院执行'][value] || null;
}

approveStatus = function (value, row, index) {
    if (typeof value === "string") {
        value = parseInt(value);
    }
    return (value === 0 && "未审批") || (value === 1 && "审批中") || (value === 2 && "审批通过") || (value === 3 && "审批拒绝") || (value === 4 && "失效") || null;
};

isDefault = function (value, row, index) {
    return (value ? "是" : "否");
}
carDealerStatus = function (value, row, index) {
    if (typeof value === "string") {
        value = parseInt(value);
    }
    return (value === 0 && "已停用") || (value === 1 && "已启用") || null;

};

cavStatus = function (value, row, index) {
    return [null, "已核销", "未核销", "已退单"][value] || null;
}
fileSended = function (value) {
    if (value != "") {
        var arrayValue = "";
        //从右到左：抵押合同、还款卡、抵押委托书、合同资料、抵押资料
        if ((value & 1) == 1)arrayValue = arrayValue + "抵押资料" + "、";
        if ((value & 2) == 2)arrayValue = arrayValue + "合同资料" + "、";
        if ((value & 4) == 4)arrayValue = arrayValue + "抵押委托书" + "、";
        if ((value & 8) == 8)arrayValue = arrayValue + "还款卡" + "、";
        if ((value & 16) == 16)arrayValue = arrayValue + "抵押合同" + "、";
        arrayValue = arrayValue.substring(0, arrayValue.length - 1);
        return arrayValue;
    } else {
        return "-";
    }
};
recipientStatus = function (value) {
    switch (value) {
        case 1:
            return "未收件";
            break;
        case 2:
            return "资料缺失";
            break;
        case 3:
            return "已收件";
        default:
        return "未收件"
    }
};

assetsPackageStatus = function (value, row, index) {
    if (typeof value === "string") {
        value = parseInt(value);
    }
    return (value === 1 && "生效中") || (value === 2 && "过期") || null;
};

dateFormTen = function (value, row, index) {
    if (value && value.length > 10) {
        return value.substr(0, 10);
    } else {
        return value;
    }
};

gpsType = function (value) {
    return [null, "有线", "无线", "有线+无线"][value] || null;
};

formatter_money = function(value, row, index){
    value = value+"";
    if(value.length == 0){
        return value;
    }else{
        var dimeIndex = value.indexOf('.');
        var dollar = value;
        var dime = '.00';
        if(-1 != dimeIndex){
            dime = value.substring(dimeIndex, value.length);
            dollar = value.substring(0, dimeIndex);
        }
        if(dollar.length < 3){
            return dollar + dime;
        }
        var mod = dollar.length % 3;
        var money = (mod == 0 ? '' : (dollar.substring(0, mod)));
        for(var i = 0; i < Math.floor(dollar.length / 3); i++){
            if ((mod == 0) && (i == 0)){
                money += dollar.substring(mod + 3 * i, mod + 3 * i + 3);
            } else{
                money += ',' + dollar.substring(mod + 3 * i, mod + 3 * i + 3);
            }
        }
        return money + dime;
    }
}


//当前月，年
var date, year, month, nowMonth;
date = new Date();
year = date.getFullYear();
month = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
nowMonth = year + "-" + month;

// 日期格式化插件
Date.prototype.format = function (format) {
    var o = {
        "M+": this.getMonth() + 1, //month
        "d+": this.getDate(), //day
        "h+": this.getHours(), //hour
        "m+": this.getMinutes(), //minute
        "s+": this.getSeconds(), //second
        "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
        "S": this.getMilliseconds() //millisecond
    };
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(format))
            format = format.replace(RegExp.$1,
                RegExp.$1.length == 1 ? o[k] :
                    ("00" + o[k]).substr(("" + o[k]).length));
    return format;
};

//确认提交或退回模态框
var sureModal = '<div class="modal fade" id="sureModal">' +
    '<div class="modal-dialog">' +
    '<div class="modal-content">' +
    '<div class="modal-header">' +
    '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
    '<h4 class="modal-title">提示信息</h4>' +
    '</div>' +
    '<div class="modal-body">' +
    '<p class="tipText"></p>' +
    '</div>' +
    '<div class="modal-footer">' +
    '<button type="button" class="btn btn-primary" id="sureOption">确定</button>' +
    '<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>' +
    '</div></div></div></div>';

function oppSureModal(text) {
    if ($("#sureModal").length > 0) {
        $("#sureModal").modal("show");
        $("#sureModal").find(".tipText").text(text);
    } else {
        $("body").append(sureModal);
        $("#sureModal").find(".tipText").text(text);
        $("#sureModal").modal("show");
    }
}

$.fn.extend({
    getBank: function () {
        comn.ajax({
            url: interUrl.gr.bankList,
            success: (function (_this) {
                return function (res) {
                    var o;
                    return $(_this).html("<option value=''>--请选择--</option>" + ((function () {
                            var j, len, ref, results;
                            ref = res.data;
                            results = [];
                            for (j = 0, len = ref.length; j < len; j++) {
                                o = ref[j];
                                results.push("<option value='" + o.id + "'>" + o.bankName + "</option>");
                            }
                            return results;
                        })()).join(""));
                };
            })(this)
        });
        return this;
    },
    getBankCompany: function (companyId, value) {
        comn.ajax({
            url: interUrl.gr.bankCompanyList,
            data: {
                companyId: companyId
            },
            success: (function (_this) {
                return function (res) {
                    var o;
                    return $(_this).html("<option value=''>--请选择--</option>" + ((function () {
                            var j, len, ref, results;
                            ref = res.data;
                            results = [];
                            for (j = 0, len = ref.length; j < len; j++) {
                                o = ref[j];
                                results.push("<option value='" + o.id + "'>" + o.bankName + "</option>");
                            }
                            return results;
                        })()).join("")).val(value || "");
                };
            })(this)
        });
        return this;
    },
    getUserByCompanyId: function (companyId) {
        if (companyId) {
            comn.ajax({
                url: interUrl.common.getUserByCompanyId,
                data: {
                    companyId: companyId
                },
                success: (function (_this) {
                    return function (res) {
                        var j, len, o, ref, str;
                        str = "<option value=''>--请选择--</option>";
                        var defaultValue = $(_this).attr('defaultValue');
                        ref = res.data;
                        for (j = 0, len = ref.length; j < len; j++) {
                            o = ref[j];
                            str += "<option value='" + o.uid + "' " + (defaultValue == o.uid ? "selected" : "") + ">" + o.realname + "</option>";
                        }
                        return $(_this).html(str);
                    };
                })(this)
            });
            return this;
        }
    },
    getGroup: function (companyId, value) {
        if (companyId) {
            comn.ajax({
                url: interUrl.common.getGroup,
                data: {
                    companyId: companyId
                },
                success: (function (_this) {
                    return function (res) {
                        var o;
                        return $(_this).html("<option value=''>--请选择--</option>" + ((function () {
                                var j, len, ref, results;
                                ref = res.data;
                                results = [];
                                for (j = 0, len = ref.length; j < len; j++) {
                                    o = ref[j];
                                    results.push("<option value='" + o.id + "'>" + o.name + "</option>");
                                }
                                return results;
                            })()).join("")).val(value || "");
                    };
                })(this)
            });
        }
        return this;
    },
    getLoanApplyBankList: function (customerId,value) {  //客户征信银行列表
        if(customerId) {
            comn.ajax({
                url: interUrl.common.loanApplyBankList,
                data:{customerId:customerId},
                success: (function (_this) {
                    return function (res) {
                        var o;
                        return $(_this).html("<option value=''>--请选择--</option>" + ((function () {
                                var j, len, ref, results;
                                ref = res.data;
                                results = [];
                                for (j = 0, len = ref.length; j < len; j++) {
                                    o = ref[j];
                                    results.push("<option data-isdiscount='" + o.discount + "' value='" + o.inquryBankId + "'>" + o.inquryBank + "</option>");
                                }
                                return results;
                            })()).join("")).val(value || "");
                    };
                })(this)
            });
        }
        return this;
    },
    getDealerName: function (value, data, groupId) {
        comn.ajax({
            url: interUrl.carDealer.selectList,
            data: {
                dealerId: data,
                groupId : groupId
            },
            success: (function (_this) {
                return function (res) {
                    var o;
                    return $(_this).html("<option value=''>--请选择--</option>" + ((function () {
                            var j, len, ref, results;
                            ref = res.data;
                            results = [];
                            for (j = 0, len = ref.length; j < len; j++) {
                                o = ref[j];
                                results.push("<option value='" + o.id + "'>" + o.dealerName + "</option>");
                            }
                            return results;
                        })()).join("")).val(value || "");
                };
            })(this)
        });
        return this;
    },
    flowGet: function (value) {
        comn.ajax({
            url: interUrl.common.flowGet,
            success: (function (_this) {
                return function (res) {
                    var o;
                    return $(_this).html("<option value=''>--请选择--</option>" + ((function () {
                            var j, len, ref, results;
                            ref = res.data;
                            results = [];
                            for (j = 0, len = ref.length; j < len; j++) {
                                o = ref[j];
                                results.push("<option value='" + o.flowType + "'>" + o.flowName + "</option>");
                            }
                            return results;
                        })()).join("")).val(value || "");
                };
            })(this)
        });
        return this;
    },
    getFlowNode: function (flowName, value) {
        if (flowName) {
            comn.ajax({
                url: interUrl.flowControl.getNode,
                data: {
                    businessTypeCode: flowName
                },
                success: (function (_this) {
                    return function (res) {
                        var o;
                        return $(_this).html("<option value=''>--请选择--</option>" + ((function () {
                                var j, len, ref, results;
                                ref = res.data;
                                results = [];
                                for (j = 0, len = ref.length; j < len; j++) {
                                    o = ref[j];
                                    results.push("<option value='" + o.nodeCode + "'>" + o.nodeName + "</option>");
                                }
                                return results;
                            })()).join("")).val(value || "");
                    };
                })(this)
            });
        }
        return this;
    },
    getFlowOperator: function (groupId, value) {
        if (flowName) {
            comn.ajax({
                url: interUrl.flowControl.operator,
                data: {
                    bizGroupId: groupId
                },
                success: (function (_this) {
                    return function (res) {
                        var o;
                        return $(_this).html("<option value=''>--请选择--</option>" + ((function () {
                                var j, len, ref, results;
                                ref = res.data;
                                results = [];
                                for (j = 0, len = ref.length; j < len; j++) {
                                    o = ref[j];
                                    results.push("<option value='" + o.uid + "'>" + o.realname + "</option>");
                                }
                                return results;
                            })()).join("")).val(value || "");
                    };
                })(this)
            });
        }
        return this;
    },
    getFlowOperator_new: function (groupId, value) {
        if (groupId) {
            comn.ajax({
                url: interUrl.flowControl.operatorNew,
                data: groupId,
                success: (function (_this) {
                    return function (res) {
                        var o;
                        return $(_this).html("<option value=''>--请选择--</option>" + ((function () {
                                var j, len, ref, results;
                                ref = res.data;
                                results = [];
                                for (j = 0, len = ref.length; j < len; j++) {
                                    o = ref[j];
                                    results.push("<option value='" + o.uid + "'>" + o.realname + "</option>");
                                }
                                return results;
                            })()).join("")).val(value || "");
                    };
                })(this)
            });
        }
        return this;
    },
    //获取资金部待打款列表合作银行下拉列表
    bank_Get: function (value) {
        comn.ajax({
            url: interUrl.export.getBank,
            success: (function (_this) {
                return function (res) {
                    var o;
                    return $(_this).html("<option value=''>--请选择--</option>" + ((function () {
                            var j, len, ref, results;
                            ref = res.data;
                            results = [];
                            for (j = 0, len = ref.length; j < len; j++) {
                                o = ref[j];
                                results.push("<option value='" + o.id + "'>" + o.bankName + "</option>");
                            }
                            return results;
                        })()).join("")).val(value || "");
                };
            })(this)
        });
        return this;
    },
    //获取资金部待打款列表收款人全称下拉列表
    getGuarantee_Get: function (value) {
        comn.ajax({
            url: interUrl.export.getGuarantee,
            success: (function (_this) {
                return function (res) {
                    var o;
                    return $(_this).html("<option value=''>--请选择--</option>" + ((function () {
                            var j, len, ref, results;
                            ref = res.data;
                            results = [];
                            for (j = 0, len = ref.length; j < len; j++) {
                                o = ref[j];
                                results.push("<option value='" + o.id + "'>" + o.organizationName + "</option>");
                            }
                            return results;
                        })()).join("")).val(value || "");
                };
            })(this)
        });
        return this;
    },
    getExpressCompanyCode: function (type) {
        //type : "ExpressCompany" 快递公司(默认)
        //type : "RelationShipType" 关系人
        comn.ajax({
            url: interUrl.gr.expressCompanyCode,
            data: {codeType: type || 'ExpressCompany'},
            success: (function (_this) {
                return function (res) {
                    var o;
                    return $(_this).html("<option value=''>--请选择--</option>" + ((function () {
                            var j, len, ref, results;
                            ref = res.data;
                            results = [];
                            for (j = 0, len = ref.length; j < len; j++) {
                                o = ref[j];
                                results.push("<option value='" + o.codeId + "'>" + o.codeName + "</option>");
                            }
                            return results;
                        })()).join(""));
                };
            })(this)
        });
        return this;
    },
    // 逾期数据导入银行插件
    getBankAll: function (value) {
        comn.ajax({
            url: interUrl.gr.getBankAll,
            success: (function (_this) {
                return function (res) {
                    var o;
                    return $(_this).html("<option value=''>--请选择--</option>" + ((function () {
                            var j, len, ref, results;
                            ref = res.data;
                            results = [];
                            for (j = 0, len = ref.length; j < len; j++) {
                                o = ref[j];
                                results.push("<option value='" + o.id + "'>" + o.bankName + "</option>");
                            }
                            return results;
                        })()).join("")).val(value || "").change();
                };
            })(this)
        });
        return this;
    },
    getPolicy: function (_data, value,name) { //获取贴息政策
        //参数说明:coId:银行id ,carBrand:品牌code  carMake:车系code   carModel:车型code,  value:当前的code  name:当前的option的name
        comn.ajax({
            url: interUrl.discountPolicy.discountLoanGetPolicy,
            data: _data,
            success: (function (_this) {
                return function (res) {
                    if(res.data.length>0){
                        var o;
                        return $(_this).html("<option value=''>--请选择--</option>" + ((function () {
                                var j, len, ref, results,codeArr=[];
                                ref = res.data;
                                results = [];
                                for (j = 0, len = ref.length; j < len; j++) {
                                    o = ref[j];
                                    codeArr.push(o.id);
                                    results.push("<option value='" + o.id + "'>" + o.policyName + "</option>");
                                }
                                if($.inArray(value,codeArr)==-1 && value && name){ //如果列表项被停用,则手动加入
                                    results.push("<option value='" + value + "'>" + name + "</option>");
                                }
                                return results;
                            })()).join("")).val(value || "");
                    }else{
                        tip({
                            content:'当前车型不在贴息范围，请选择贴息为“否”。'
                        })
                    }

                };
            })(this)
        });
        return this;
    },
    getScheme: function (_data, value, name, disPolicySchemeNpers) { //获取贴息方案
        //参数说明:policyId:贴息政策policyId ,carBrand:品牌code  carMake:车系code  carModel:车型code  nper:期数  value:当前的code  name:当前的option的name  disPolicySchemeNpers:当前方案的公式
        if (_data) {
            comn.ajax({
                url: interUrl.discountPolicy.discountLoanGetScheme,
                data: _data,
                success: (function (_this) {
                    return function (res) {
                        var o;
                        return $(_this).html("<option value=''>--请选择--</option>" + ((function () {
                                var j, len, ref, results,codeArr=[];
                                ref = res.data;
                                results = [];
                                for (j = 0, len = ref.length; j < len; j++) {
                                    o = ref[j];
                                    codeArr.push(o.id);
                                    var formula = JSON.stringify(o.disPolicySchemeNpers[0]); //计算贴息金额需要存的数据
                                    results.push("<option value='" + o.id + "' data-formula='" + formula + "'>" + o.schemeName + "</option>");
                                }
                                if($.inArray(value,codeArr)==-1 && value && name && disPolicySchemeNpers){ //如果列表项被停用,则手动加入
                                    var _disPolicySchemeNpers=JSON.stringify(disPolicySchemeNpers);
                                    results.push("<option value='" + value + "' data-formula='" + _disPolicySchemeNpers + "'>" + name + "</option>");
                                }
                                return results;
                            })()).join("")).val(value || "");
                    };
                })(this)
            });
            return this;
        }
    },
    getOpeningBank: function () {
        comn.ajax({
            url: interUrl.gr.getOpeningBank,
            success: (function (_this) {
                return function (res) {
                    var o;
                    return $(_this).html("<option value=''>--请选择--</option>" + ((function () {
                            var j, len, ref, results;
                            ref = res.data;
                            results = [];
                            for (j = 0, len = ref.length; j < len; j++) {
                                o = ref[j];
                                results.push("<option value='" + o.id + "' data-code='"+o.bankCode+"'>" + o.bankName + "</option>");
                            }
                            return results;
                        })()).join(""));
                };
            })(this)
        });
        return this;
    },
    //获取支行
    getCashBank: function(value){
        comn.ajax({
            url:interUrl.gr.getCashBank,
            data:value,
            success: (function(_this){
            	$("#getCashBank").addClass('hide');
                return function(res){
                    var o;
                    return $(_this).html(((function(){
                    	 $("#getCashBank").removeClass('hide');
                        var j,len,ref,results;
                            ref=res.data;
                            results=[];
                            for(j = 0,len = ref.length;j < len;j++){
                                o=ref[j];
                                results.push("<li><a href='javascript:;' data-code='"+o.id+"'>"+o.bankName+"</a></li>");
                            }
                            return results;
                        })()).join(""));
                }

            })(this)
        })
    },
    // 逾期数据导入银行模版插件
    getTemplateList: function (coBankId, value) {
//        if (coBankId) {
            comn.ajax({
                url: interUrl.gr.getTemplateList,
                data: {
                    coBankId: coBankId
                },
                success: (function (_this) {
                    return function (res) {
                        var o;
                        return $(_this).html("<option value=''>--请选择--</option>" + ((function () {
                                var j, len, ref, results;
                                ref = res.data;
                                results = [];
                                for (j = 0, len = ref.length; j < len; j++) {
                                    o = ref[j];
                                    results.push("<option value='" + o.id + "'>" + o.name + "</option>");
                                }
                                return results;
                            })()).join("")).val(value || "");
                    };
                })(this)
            });
//        }
        return this;
    },
    getFinancialProduct: function (loanTerm, coBankId, businessTypeId, value) {
        if (coBankId && businessTypeId) {
            comn.ajax({
                url: interUrl.loanDetail.getFinancialProduct,
                data: {
                    loanTerm: loanTerm,
                    coBankId: coBankId,
                    businessTypeId: businessTypeId
                },
                success: (function (_this) {
                    return function (res) {
                        var o;
                        return $(_this).html("<option value=''>--请选择--</option>" + ((function () {
                                var j, len, ref, results;
                                ref = res.data;
                                results = [];
                                for (j = 0, len = ref.length; j < len; j++) {
                                    o = ref[j];
                                    results.push("<option value='" + o.id + "' data-nper='" + o.nper + "'>" + o.productName + "</option>");
                                }
                                return results;
                            })()).join("")).val(value || "");
                    };
                })(this)
            });
            return this;
        }
    },
    getOccupationList: function (value) {
        comn.ajax({
            url: interUrl.myTask.occupationList,
            data: {
                codeType: 'Profession'
            },
            success: (function (_this) {
                return function (res) {
                    var o;
                    return $(_this).html("<option value=''>--请选择--</option>" + ((function () {
                            var j, len, ref, results;
                            ref = res.data;
                            results = [];
                            for (j = 0, len = ref.length; j < len; j++) {
                                o = ref[j];
                                results.push("<option value='" + o.codeId + "'>" + o.codeName + "</option>");
                            }
                            return results;
                        })()).join("")).val(value || "");
                };
            })(this)
        });
        return this;
    },
    getJobList: function (value) {
        comn.ajax({
            url: interUrl.myTask.jobList,
            data: {
                codeType: "Post"
            },
            success: (function (_this) {
                return function (res) {
                    var o;
                    return $(_this).html("<option value=''>--请选择--</option>" + ((function () {
                            var j, len, ref, results;
                            ref = res.data;
                            results = [];
                            for (j = 0, len = ref.length; j < len; j++) {
                                o = ref[j];
                                results.push("<option value='" + o.codeId + "'>" + o.codeName + "</option>");
                            }
                            return results;
                        })()).join("")).val(value || "");
                };
            })(this)
        });
        return this;
    },
    getUnitList: function (value) {
        comn.ajax({
            url: interUrl.myTask.unitList,
            data: {
                codeType: 'WorkNature'
            },
            success: (function (_this) {
                return function (res) {
                    var o;
                    return $(_this).html("<option value=''>--请选择--</option>" + ((function () {
                            var j, len, ref, results;
                            ref = res.data;
                            results = [];
                            for (j = 0, len = ref.length; j < len; j++) {
                                o = ref[j];
                                results.push("<option value='" + o.codeId + "'>" + o.codeName + "</option>");
                            }
                            return results;
                        })()).join("")).val(value || "");
                };
            })(this)
        });
        return this;
    },
    getPaymentType: function (value) {
        comn.ajax({
            url: interUrl.myTask.paymentTypeList,
            data: {
                codeType: 'PaymentType'
            },
            success: (function (_this) {
                return function (res) {
                    var o;
                    return $(_this).html("<option value=''>--请选择--</option>" + ((function () {
                            var j, len, ref, results;
                            ref = res.data;
                            results = [];
                            for (j = 0, len = ref.length; j < len; j++) {
                                o = ref[j];
                                results.push("<option value='" + o.codeId + "'>" + o.codeName + "</option>");
                            }
                            return results;
                        })()).join("")).val(value || "");
                };
            })(this)
        });
        return this;
    },
    getPaymentCode: function (value) {
        comn.ajax({
            url: interUrl.myTask.paymentCodeList,
            data: {
                codeType: 'PaymentMode'
            },
            success: (function (_this) {
                return function (res) {
                    var o;
                    return $(_this).html("<option value=''>--请选择--</option>" + ((function () {
                            var j, len, ref, results;
                            ref = res.data;
                            results = [];
                            for (j = 0, len = ref.length; j < len; j++) {
                                o = ref[j];
                                results.push("<option value='" + o.codeId + "'>" + o.codeName + "</option>");
                            }
                            return results;
                        })()).join("")).val(value || "");
                };
            })(this)
        });
        return this;
    },
    getCompanyAccount:function(value){
        comn.ajax({
            url: interUrl.myTask.companyAccount,
            success: (function (_this) {
                return function (res) {
                    var o;
                    return $(_this).html("<option value=''>--请选择--</option>" + ((function () {
                            var j, len, ref, results;
                            ref = res.data;
                            results = [];
                            for (j = 0, len = ref.length; j < len; j++) {
                                o = ref[j];
                                results.push("<option value='" + o.id + "'>" + o.accountName + "</option>");
                            }
                            return results;
                        })()).join("")).val(value || "");
                };
            })(this)
        });
        return this;
    },
    //付款方式列表
    payTypeMent:function(data,value){
    comn.ajax({
        url:interUrl.myTask.getPayType,
        data:{
            projectId:data
        },
        success:(function(_this){
            return function(res){
                var o;
                return $(_this).html("<option value=''>--请选择--</option>"+((function(){
                        var ref=res.data.payMode;
                        var results=[];
                        for(var i=0;i<ref.length;i++){
                            o=ref[i];
                            results.push('<option value="'+o.value+'">'+o.name+'</option>')
                        }
                        return results;
                    })()).join("")).val(value || res.data.defaultValue);
            }
        })(this)
    })
    },

    getToday: function () {
        var date, y, m, d, today;
        date = new Date();
        y = date.getFullYear();
        m = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
        d = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        today = y + "-" + m + "-" + d;
        $(this).val(today);
    },
    getTodayH:function(){
        var date, y, m, d, today;
        date = new Date();
        y = date.getFullYear();
        m = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
        d = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        var h = (date.getHours()+100+'').slice(1);
        var mm = (date.getMinutes()+100+'').slice(1);
        today = y + "-" + m + "-" + d+' '+h+":"+mm+':00';
        $(this).val(today);
    },
    getMonthDay1: function () {
        var date, y, m, d, today;
        date = new Date();
        y = date.getFullYear();
        m = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
        today = y + "-" + m + "-" + "01";
        $(this).val(today);
    },
    getLastMonthDay1: function () {
        var date, y, m, d, today;
        date = new Date();
        y = date.getFullYear();
        m = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
        today = y + "-" + m + "-" + "01";
        $(this).val(today);
    },
    getYear1Day1: function () {
        var date, y, m, d, today;
        date = new Date();
        y = date.getFullYear();
        m = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
        d = date.getDate();
        today = (y + 1) + "-" + m + "-" + (d - 1);
        $(this).val(today);
    },
    //当年第一月
    getMonthFirst: function () {
        var date = new Date();
        var MonthFirst = date.getFullYear();
        $(this).val(MonthFirst + "-01");
    },
    //当月
    getMonthCur: function () {
        var date = new Date();
        var currentMonth = date.getMonth();
        var MonthFirstDay = new Date(date.getFullYear(), currentMonth, 1).format('yyyy-MM');
        $(this).val(MonthFirstDay);
    },
    //当月第一天
    getMonthDayFirst: function () {
        var date = new Date();
        var currentMonth = date.getMonth();
        var MonthFirstDay = new Date(date.getFullYear(), currentMonth, 1).format('yyyy-MM-dd');
        $(this).val(MonthFirstDay);
    },
    //获取向后向前的日期
    getDayCul:function(day){
        var date = new Date();
        var time=date.getTime()+day*24*3600*1000;
        var MonthFirstDay = new Date(time).format('yyyy-MM-dd');
        $(this).val(MonthFirstDay);
    },
    //当月最后一天
    getMonthDayLast: function () {
        var date = new Date();
        var currentMonth = date.getMonth();
        var nextMonth = ++currentMonth;
        var nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1);
        var oneDay = 1000 * 60 * 60 * 24;
        var today = new Date(nextMonthFirstDay - oneDay).format('yyyy-MM-dd');
        $(this).val(today);
    },
    getPayDate: function(){
        var _this=this;
        var weekArr=['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
        var data=new Date();
        var year=data.getFullYear();
        var month=data.getMonth();
        var day=data.getDate();
        var week=data.getDay();
        setInterval(function(){
            var date=new Date();
            var hours=date.getHours();
            var min=date.getMinutes();
            var sec=date.getSeconds();
            hours=hours<10?"0"+hours:hours;
            min=min<10?"0"+min:min;
            sec=sec<10?"0"+sec:sec;
            $(_this).html(year+'-'+(month+1)+'-'+day+'&nbsp;&nbsp;'+weekArr[week]+'</br>'+hours+':'+min+':'+sec)
        },1000)
    },
    getLoanFlowStatusList: function () {
        comn.ajax({
            url: interUrl.common.getLoanFlowStatusList,
            success: (function (_this) {
                return function (res) {
                    var o;
                    return $(_this).html("<option value=''>--请选择--</option>" + ((function () {
                            var j, len, ref, results;
                            ref = res.data.flowStatus;
                            results = [];
                            for (j = 0, len = ref.length; j < len; j++) {
                                o = ref[j];
                                results.push("<option value='" + o.code + "'>" + o.name + "</option>");
                            }
                            return results;
                        })()).join(""));
                };
            })(this)
        });
        return this;
    },
    //获取流程意见
    getOpinion_s: function (data) {
        comn.ajax({
            url: interUrl.common.getOpinion,
            data: data,
            success: (function (_this) {
                return function (res) {
                    $(_this).val(res.data);
                };
            })(this)
        });
    },
    //获取合作银行
    getCooperationUnit: function () {
        comn.ajax({
            url: interUrl.common.cooperation,
            success: (function (_this) {
                return function (res) {
                    var o;
                    return $(_this).html("<option value=''>--请选择--</option>" + ((function () {
                            var j, len, ref, results;
                            ref = res.data;
                            results = [];
                            for (j = 0, len = ref.length; j < len; j++) {
                                o = ref[j];
                                results.push("<option value='" + o.codeId + "'>" + o.codeName + "</option>");
                            }
                            return results;
                        })()).join(""));
                };
            })(this)
        });
        return this;
    },
    setPostLoanTerm:function(){
        var arr=[];
        for(var i=1;i<=36;i++){
            arr.push("<option value="+i+">"+i+"期</option>");
        }
        return $(this).append(arr.join(""));
    }
});

function score(a) {    //评分展示
    var this_ = $(".score");
    if (type == 1 || type == 2 || type == 3) {
        this_.children('.scoreNum').html(a);
        if (a >= 101) {
            this_.attr("fors", "03").show();
        } else if (a >= 81 && a <= 100) {
            this_.attr("fors", "02").show();
        } else if (a < 81) {
            this_.attr("fors", "01").show();
        }
    }

}

//校验规则新增
if(jQuery.validator){
    jQuery.validator.addMethod("isMoney", function(value, element) {
        var money =/^(([1-9]\d*)|0)(\.\d{1,2})?$/;
        return this.optional(element) || (money.test(value));
    }, "请填写正确的金额");
    jQuery.validator.addMethod("isMoney8", function(value, element) {
        var money =/^(([1-9]\d{0,7})|0)(\.\d{1,2})?$/;
        return this.optional(element) || (money.test(value));
    }, "请填写正确的金额");
    jQuery.validator.addMethod("bankCount", function(value, element) {
        var count =/^[0-9]+$/;
        return this.optional(element) || (count.test(value));
    }, "请填写正确的账号");
    //jQuery.validator.addMethod("adrLimit", function(value, element) {
    //    var adrInput=$(element).parents('.form-group').prev().find('input');
    //    adrInput.each(function(){
    //        value+=$(this).val()
    //    })
    //    var limit=50;
    //    return this.optional(element) || (value.length<limit);
    //}, "长度不能超过 50 个字符");
}
//$('[name$="AddressDetail"]').addClass('adrLimit').attr('placeholder','街道、小区门牌号');