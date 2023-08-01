import axios from "axios";
import { CollectionObj } from "../types/state/collection/collectionTypes";

// ----------------------------------------------------------------------
// 컬렉션 관련 서비스
// ----------------------------------------------------------------------

// 컬렉션 리스트 데이터 요청
export const getCollectionData = async (page: number, limit: number) => {
  try {
    const url = `/api/collections/${page}`;
    const response = await axios.get(url, {
      params: {
        limit,
      },
    });
    const data = response.data;
    const obj = {
      isSuccess: data.isSuccess,
      documentCount: data.documentCount,
      totalPages: data.totalPages,
      payload: data.collection,
    };

    if (response.data.msg && response.data.msg.code) {
      // 에러 코드 있을 시
      obj.payload.code = response.data.msg.code;
    }

    return obj;
  } catch (err) {
    console.error(err);
    return {
      payload: { isSuccess: false, msg: "오류가 발생했어요" },
    };
  }
};

// 컬렉션 디테일 데이터 요청
export const getDetailData = async (
  id: string,
  page: number,
  limit: number
) => {
  try {
    const url = `/api/collections/detail/${id}`;
    const response = await axios.get(url, {
      params: {
        page,
        limit,
      },
    });
    const obj = { payload: response.data };
    if (response.data.msg && response.data.msg.code) {
      // 에러 코드 있을 시
      obj.payload.code = response.data.msg.code;
    }

    return obj;
  } catch (err) {
    console.error(err);
    return {
      payload: { isSuccess: false, msg: "오류가 발생했어요" },
    };
  }
};

// 이전 컬렉션 데이터 요청
export const getPreCollection = async (id: string) => {
  try {
    const url = `/api/collections/pre/${id}`;
    const response = await axios.get(url);

    const obj = { payload: response.data };
    if (response.data.msg && response.data.msg.code) {
      // 에러 코드 있을 시
      obj.payload.code = response.data.msg.code;
    }

    return obj;
  } catch (err) {
    console.error(err);
    return {
      payload: { isSuccess: false, msg: "오류가 발생했어요" },
    };
  }
};

// 컬렉션 등록 요청
export const registerCollection = async (body: CollectionObj) => {
  try {
    const response = await axios.post("/api/collections/register", body);
    const obj = { payload: response.data };
    if (response.data.msg && response.data.msg.code) {
      // 에러 코드 있을 시
      obj.payload.code = response.data.msg.code;
    }

    return obj;
  } catch (err) {
    console.error(err);
    return {
      payload: { isSuccess: false, msg: "오류가 발생했어요" },
    };
  }
};

// 컬렉션 수정 요청
export const editCollection = async (id: string, body: CollectionObj) => {
  try {
    const response = await axios.patch(`/api/collections/edit/${id}`, body);
    const obj = { payload: response.data };
    if (response.data.msg && response.data.msg.code) {
      // 에러 코드 있을 시
      obj.payload.code = response.data.msg.code;
    }
    return obj;
  } catch (err) {
    console.error(err);
    return {
      payload: { isSuccess: false, msg: "오류가 발생했어요" },
    };
  }
};

// 컬렉션 삭제 요청
export const deleteCollection = async (id: string) => {
  try {
    const url = "/api/collections";
    const response = await axios.delete(url, {
      params: {
        id,
      },
    });

    const obj = { payload: response.data };
    if (response.data.msg && response.data.msg.code) {
      // 에러 코드 있을 시
      obj.payload.code = response.data.msg.code;
    }
    return obj;
  } catch (err) {
    console.error(err);
    return {
      payload: { isSuccess: false, msg: "오류가 발생했어요" },
    };
  }
};
