<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests;
    use ValidatesRequests;

    /**
     * send success response
     *
     * @param string $message
     * @param array $result
     * @param integer $httpCode
     * @return \Illuminate\Http\JsonResponse
     */
    public function sendResponse($message = "success", $result = [], $next = null, $previous = null, $httpCode = 200)
    {
        $response = count($result) != 0 ? [
            'success' => true,
            'next' => $next,
            'previous' => $previous,
            'size'    => count($result),
            'data'    => $result,
            'message' => $message,

        ] : [
            'success' => true,
            'message' => $message,
        ];

        return response()->json($response, $httpCode);
    }


    /**
     * return error response.
     *
     * @param string $error
     * @param array|\Illuminate\Support\MessageBag $errorMessages
     * @param int $code
     * @return \Illuminate\Http\JsonResponse
     */
    public function sendError($error, $errorMessages = [], $code = 404)
    {
        $response = [
            'success' => false,
            'message' => $error,
        ];


        if (!empty($errorMessages)) {
            $response['data'] = $errorMessages;
        }


        return response()->json($response, $code);
    }

    protected function createUrl($mixer = []): string|null
    {
        $host = isset($mixer['host']) ? $mixer['host'] : request()->getSchemeAndHttpHost();
        $params = [];
        foreach ($mixer as $key => $value) {
            $params[] = $key . '=' . $value;
        }
        $param = implode("&", $params);
        if (strlen($param)) {
            return $host . "?" . http_build_query($mixer);
        }
        return null;
    }
}
