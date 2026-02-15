using System;

namespace Application.Core;

public class AppException(int statucCode, string message, string? details)
{
    public int StatusCode { get; set; } = statucCode;

    public string Message { get; set; } = message;

    public string? Details { get; set; } = details;
}
