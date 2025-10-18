export function successResponse(data, message = null) {
  const response = {
    success: true,
    data,
  };
  
  if (message) {
    response.message = message;
  }
  
  return response;
}

export function errorResponse(message, details = null) {
  const response = {
    success: false,
    error: message,
  };
  
  if (details) {
    response.details = details;
  }
  
  return response;
}

export function paginatedResponse(data, page, limit, total) {
  return {
    success: true,
    data,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
}